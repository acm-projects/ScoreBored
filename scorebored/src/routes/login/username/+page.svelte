<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db } from "$lib/firebase/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from 'svelte';

  let BoardID = "";
  let BoardName = '';
  let datapoints = []; // 예시: [1.0, 2.0, 3.0]
  let isQuantity = false;
  let X_axis = '';
  let Y_axis = '';
  let numTarget = 0;
  let timeTarget = 0;
  let lastEdited = new Date();
  let Username = ''; // 사용자 컬렉션에 추가할 필드
  let loading = false;
  let isAvailable = false;
  let debounceTimer;
  let currentUser = null;

  const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  $: isValid = BoardID?.length > 2 && BoardID.length < 16 && re.test(BoardID);
  $: isTouched = BoardID.length > 0;
  $: isTaken = isValid && !isAvailable && !loading;

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = user;
      } else {
        currentUser = null;
      }
    });
  });

  async function checkAvailability() {
    isAvailable = false;
    clearTimeout(debounceTimer);
    loading = true;
    debounceTimer = setTimeout(async () => {
      const ref = doc(db, "user", BoardID);
      const docSnap = await getDoc(ref);
      isAvailable = !docSnap.exists();
      loading = false;
    }, 500);
  }

  async function confirmBoardID() {
    if (!currentUser) {
      console.error("User not found");
      return;
    }
    const uid = currentUser.uid;

    const batch = writeBatch(db);
    batch.set(doc(db, "user", uid), { uid: uid, Username: Username });
    batch.set(doc(db, "scoreboard", BoardID), {
      uid,
      BoardName,
      datapoints,
      isQuantity,
      X_axis,
      Y_axis,
      numTarget,
      timeTarget,
      lastEdited: lastEdited.toISOString()
    });

    try {
      await batch.commit();
    } catch (error) {
      console.error("Error in batch commit:", error);
    }

    BoardID = '';
    BoardName = '';
    datapoints = [];
    isQuantity = false;
    X_axis = '';
    Y_axis = '';
    numTarget = 0;
    timeTarget = 0;
    lastEdited = new Date();
    Username = '';
    isAvailable = false;
  }
</script>

<AuthCheck>
  <form class="w-2/5" on:submit|preventDefault={confirmBoardID}>
    <input
      type="text"
      placeholder="BoardID"
      class="input w-full"
      bind:value={BoardID}
      on:input={checkAvailability}
      class:input-error={(!isValid && isTouched)}
      class:input-warning={isTaken}
      class:input-success={isAvailable && isValid && !loading}
    />
    <input
      type="text"
      placeholder="Username"
      class="input w-full my-2"
      bind:value={Username}
    />
    <input
      type="text"
      placeholder="Board Name"
      class="input w-full my-2"
      bind:value={BoardName}
    />
    <!-- datapoints 및 기타 필드를 위한 추가적인 입력 필드가 필요합니다. -->
    <!-- 예시: <input type="text" placeholder="Data Points" ...> -->
    <input
      type="checkbox"
      class="checkbox"
      bind:checked={isQuantity}
    /> Is Quantity?
    <input
      type="text"
      placeholder="X Axis"
      class="input w-full my-2"
      bind:value={X_axis}
    />
    <input
      type="text"
      placeholder="Y Axis"
      class="input w-full my-2"
      bind:value={Y_axis}
    />
    <input
      type="number"
      placeholder="Number Target"
      class="input w-full my-2"
      bind:value={numTarget}
    />
    <input
      type="number"
      placeholder="Time Target"
      class="input w-full my-2"
      bind:value={timeTarget}
    />
    <button class="btn btn-success" type="submit" disabled={!isValid || !isAvailable || loading}>
      Confirm BoardID
    </button>
  </form>
</AuthCheck>
