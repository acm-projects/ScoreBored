<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db } from "$lib/firebase/firebase";
  import { doc, getDoc, setDoc, onSnapshot, collection } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from 'svelte';

  let BoardID = "";
  let BoardName = '';
  let datapoints = [];
  let isQuantity = false;
  let X_axis = '';
  let Y_axis = '';
  let numTarget = 0;
  let timeTarget = 0;
  let lastEdited = new Date();
  let Username = '';
  let currentUser = null;
  let referenceArray = [];

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

  async function loadBoardData() {
    if (!BoardID) {
      console.error("No BoardID provided");
      return;
    }

    try {
      const boardRef = doc(db, "scoreboard", BoardID);
      const boardSnap = await getDoc(boardRef);

      if (boardSnap.exists()) {
        const boardData = boardSnap.data();
        BoardName = boardData.BoardName;
        datapoints = boardData.datapoints;
        isQuantity = boardData.isQuantity;
        X_axis = boardData.X_axis;
        Y_axis = boardData.Y_axis;
        numTarget = boardData.numTarget;
        timeTarget = boardData.timeTarget;
        referenceArray = boardData.referenceArray || [];
        await initializeDatapoints();
        monitorChildBoards();
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error loading board data:", error);
    }
  }

  async function initializeDatapoints() {
    if (!isQuantity) {
      await Promise.all(referenceArray.map(async (childBoardID, index) => {
        if (childBoardID) {
          const childBoardRef = doc(db, "scoreboard", childBoardID);
          const childBoardSnap = await getDoc(childBoardRef);
          if (childBoardSnap.exists()) {
            const childBoardData = childBoardSnap.data();
            datapoints[index] = childBoardData.isCompleted;
          }
        }
      }));
      // 강제 업데이트를 위해 Svelte의 상태를 업데이트
      datapoints = [...datapoints];
    }
  }

  function addDatapoint() {
    datapoints.push(isQuantity ? 0 : false);
    if (!isQuantity) {
      referenceArray.push('');
    }
  }

  function removeDatapoint(index) {
    datapoints.splice(index, 1);
    if (!isQuantity) {
      referenceArray.splice(index, 1);
    }
  }

  function updateDatapoint(value, index) {
    datapoints[index] = isQuantity ? parseFloat(value) : value === 'true';
  }

  function monitorChildBoards() {
    if (!isQuantity) {
      referenceArray.forEach((childBoardID, index) => {
        if (childBoardID) {
          const childBoardRef = doc(db, "scoreboard", childBoardID);
          onSnapshot(childBoardRef, (doc) => {
            const childBoardData = doc.data();
            if (childBoardData && childBoardData.isCompleted !== undefined) {
              datapoints[index] = childBoardData.isCompleted;
              // 강제 업데이트를 위해 Svelte의 상태를 업데이트
              datapoints = [...datapoints];
            }
          });
        }
      });
    }
  }

  async function confirmBoardID() {
    if (!currentUser) {
      console.error("User not found");
      return;
    }

    let isCompleted = isQuantity ? datapoints.reduce((sum, value) => sum + value, 0) >= numTarget : datapoints.every(value => value === true);

    const scoreboardRef = BoardID ? doc(db, "scoreboard", BoardID) : doc(collection(db, "scoreboard"));

    await setDoc(scoreboardRef, {
      uid: currentUser.uid,
      BoardName,
      datapoints,
      isQuantity,
      X_axis,
      Y_axis,
      numTarget,
      timeTarget,
      isCompleted,
      lastEdited: lastEdited.toISOString(),
      referenceArray
    });

    if (!BoardID) {
      BoardID = scoreboardRef.id;
    }

    await setDoc(doc(db, "user", currentUser.uid), {
      uid: currentUser.uid,
      Username: Username
    });

    BoardName = '';
    datapoints = [];
    isQuantity = false;
    X_axis = '';
    Y_axis = '';
    numTarget = 0;
    timeTarget = 0;
    lastEdited = new Date();
    Username = '';
  }
</script>

<AuthCheck>
  <form class="w-2/5" on:submit|preventDefault={confirmBoardID}>
    <div class="text-lg font-bold my-2">
      Board ID: 
      <input type="text" class="input w-full my-2" bind:value={BoardID} />
      <button class="btn btn-primary" type="button" on:click={loadBoardData}>Load Board Data</button>
    </div>
    <input type="text" placeholder="Board Name" class="input w-full my-2" bind:value={BoardName} />
    <input type="checkbox" class="checkbox" bind:checked={isQuantity} /> Is Quantity?
    <input type="text" placeholder="X Axis" class="input w-full my-2" bind:value={X_axis} />
    <input type="text" placeholder="Y Axis" class="input w-full my-2" bind:value={Y_axis} />
    <input type="number" placeholder="Number Target" class="input w-full my-2" bind:value={numTarget} />
    <input type="number" placeholder="Time Target" class="input w-full my-2" bind:value={timeTarget} />
    
    <div>
      <button type="button" on:click={addDatapoint}>Add Datapoint</button>
      {#each datapoints as datapoint, index}
        <div class="flex items-center my-2">
          {#if isQuantity}
            <input
              type="number"
              class="input"
              bind:value={datapoints[index]}
            />
          {:else}
            <input
              type="text"
              class="input"
              placeholder="Child Board ID"
              bind:value={referenceArray[index]}
            />
            <select bind:value={datapoints[index]} on:change={(event) => updateDatapoint(event.target.value, index)}>
              <option value="true" selected={datapoint === true}>True</option>
              <option value="false" selected={datapoint === false}>False</option>
            </select>
          {/if}
          <button type="button" on:click={() => removeDatapoint(index)}>Remove</button>
        </div>
      {/each}
    </div>

    <button class="btn btn-success" type="submit">Confirm BoardID</button>
  </form>
</AuthCheck>
