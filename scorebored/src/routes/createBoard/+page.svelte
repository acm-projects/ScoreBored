<script lang="ts">
  import ProgressBar from "./progressbar.svelte";
  import TypeInput from "./typeInput.svelte";
  import TitleInput from "./titleInput.svelte";
  import TimeInput from "./timeInput.svelte";
  import GoalInput from "./goalInput.svelte";
  import NavBar from "../Navbar/+page.svelte";

  // Back end starts here
  import { db } from "$lib/firebase/firebase";
  import { addDoc, collection } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from 'svelte';

  let BoardID = "";
  let BoardName = '';
  // @ts-ignore
  let datapoints = []; 
  let isQuantity = false;
  let X_axis = '';
  let Y_axis = '';
  let numTarget = 0;
  let timeTarget = 0;
  let lastEdited = new Date();
  // @ts-ignore
  let currentUser = null;


  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = user;
      } else {
        currentUser = null;
        console.log("hihi");
      }
    });
    
  });

  async function confirmBoardID() {
    // @ts-ignore
    if (!currentUser) {
      console.error("User not found");
      return;
    }
    try {
      const scoreboardRef = await addDoc(collection(db, "scoreboard"), {
        // @ts-ignore
        uid: currentUser.uid,
        BoardName,
        // @ts-ignore
        datapoints,
        isQuantity,
        X_axis,
        Y_axis,
        numTarget,
        timeTarget,
        lastEdited: lastEdited.toISOString()
      });
      
      BoardID = scoreboardRef.id; 

      BoardName = '';
      datapoints = [];
      isQuantity = false;
      X_axis = '';
      Y_axis = '';
      numTarget = 0;
      timeTarget = 0;
      lastEdited = new Date();
    } catch (error) {
      console.error("Error in creating scoreboard:", error);
    }
  }

  //**********/ Back end stops here

  let isPressed = [true, false, false, false];
  
  // @ts-ignore
  function handleEnterKey(event){
    if(event.key === 'Enter'){
      if (isPressed[3]) {
        confirmBoardID();
        // console.log(BoardName, X_axis, Y_axis, timeTarget, numTarget, isQuantity, lastEdited);
        // window.location.href = '/yourProfile';
      }
      else if (isPressed[2]) isPressed[3] = true;
      else if (isPressed[1]) {
        if (BoardName === '') alert("Please input board's name!");
        else isPressed[2] = true;
      }
      else if (isPressed[0]) isPressed[1] = true;
      
    }
  }
</script>

<svelte:window on:keydown={ handleEnterKey }/>

<NavBar />

<div class="create-board-all" >
  <ProgressBar bind:isClicked={isPressed} />

  {#if isPressed[0] == true && isPressed[1] == false}
  <!-- this is the board's type (true -> quantity, false -> checklist) -->
    <TypeInput bind:changePage0 = {isPressed[1]} bind:quantityType = {isQuantity}/>
  {:else if isPressed[1] == true && isPressed[2] == false}
  <!-- Input the title of the board -->
    <TitleInput bind:changePage1 = {isPressed[2]} bind:nameOfBoard = {BoardName}/>

  {:else if isPressed[2] == true && isPressed[3] == false}
  <!-- Input the time target and the x-axis -->
    <TimeInput bind:changePage2 = {isPressed[3]} bind:timeSelected = {X_axis} bind:frequency = {timeTarget}/>
  {:else} <GoalInput bind:numberInput = {numTarget} />
  {/if}
</div>

<style>
  .create-board-all{
    background-color: #182c25;
    height: 90.5vh;
    padding-top: 7rem;
  }

</style>

<!-- Form submit SVELTE https://www.youtube.com/watch?v=52nXUwQWeKI -->