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
  let currentUser = null;

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

  function generateRandomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async function isIdUnique(id) {
    const ref = doc(db, "scoreboard", id);
    const docSnap = await getDoc(ref);
    return !docSnap.exists();
  }

  async function confirmBoardID() {
    if (!currentUser) {
      console.error("User not found");
      return;
    }

    let uniqueIdFound = false;
    while (!uniqueIdFound) {
      BoardID = generateRandomId(10);
      uniqueIdFound = await isIdUnique(BoardID);
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
      // 폼 제출 후 필드 초기화
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
    } catch (error) {
      console.error("Error in batch commit:", error);
    }
  }
</script>

<AuthCheck>
  <form class="w-2/5" on:submit|preventDefault={confirmBoardID}>
    <div class="text-lg font-bold my-2">
      Board ID: {BoardID || 'Generating...'}
    </div>
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
    <!-- 나머지 입력 필드도 동일하게 유지합니다. -->
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
    <button class="btn btn-success" type="submit">
      Confirm BoardID
    </button>
  </form>
</AuthCheck>
