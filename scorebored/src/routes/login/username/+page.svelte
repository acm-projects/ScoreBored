<script lang="ts">
  import AuthCheck from '../../lib/components/AuthCheck.svelte';
  import { db } from '../../lib/firebase';
  import { doc, getDoc, writeBatch } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from 'svelte';

  let username = "";
  let currentProgress = '';
  let goalNeeded = '';
  let isCompleted = false;
  let labelX = '';
  let labelY = '';
  let loading = false;
  let isAvailable = false;
  let debounceTimer;
  let currentUser = null;

  const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  $: isValid = username?.length > 2 && username.length < 16 && re.test(username);
  $: isTouched = username.length > 0;
  $: isTaken = isValid && !isAvailable && !loading;

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        currentUser = user;
      } else {
        // User is signed out
        currentUser = null;
      }
    });
  });

  async function checkAvailability() {
    isAvailable = false;
    clearTimeout(debounceTimer);
    loading = true;
    debounceTimer = setTimeout(async () => {
      console.log("checking availability of", username);
      const ref = doc(db, "usernames", username);
      const docSnap = await getDoc(ref);
      isAvailable = !docSnap.exists();
      loading = false;
    }, 500);
  }

  async function confirmUsername() {
    console.log("confirming username", username);
    if (!currentUser) {
      console.error("User not found");
      return;
    }
    const uid = currentUser.uid; // Use the current user's UID

    const batch = writeBatch(db);
    batch.set(doc(db, "usernames", username), { uid: uid });
    batch.set(doc(db, "users", uid), { 
      username, 
      currentProgress, 
      goalNeeded, 
      isCompleted, 
      labels: { x: labelX, y: labelY }
    });
    await batch.commit();
    // Clear the form
    username = '';
    currentProgress = '';
    goalNeeded = '';
    isCompleted = false;
    labelX = '';
    labelY = '';
    isAvailable = false;
  }
</script>

<AuthCheck>
  <form class="w-2/5" on:submit|preventDefault={confirmUsername}>
    <input
      type="text"
      placeholder="Username"
      class="input w-full"
      bind:value={username}
      on:input={checkAvailability}
      class:input-error={(!isValid && isTouched)}
      class:input-warning={isTaken}
      class:input-success={isAvailable && isValid && !loading}
    />
    <input
      type="text"
      placeholder="Current Progress"
      class="input w-full my-2"
      bind:value={currentProgress}
    />
    <input
      type="text"
      placeholder="Goal Needed"
      class="input w-full my-2"
      bind:value={goalNeeded}
    />
    <label class="checkbox-label">
      <input
        type="checkbox"
        class="checkbox"
        bind:checked={isCompleted}
      />
      Is Completed?
    </label>
    <input
      type="text"
      placeholder="Label X"
      class="input w-full my-2"
      bind:value={labelX}
    />
    <input
      type="text"
      placeholder="Label Y"
      class="input w-full my-2"
      bind:value={labelY}
    />
    <button class="btn btn-success" type="submit" disabled={!isValid || !isAvailable || loading}>
      Confirm Username
    </button>
  </form>
</AuthCheck>
