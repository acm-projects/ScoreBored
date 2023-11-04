<script>
  import ProgressBar from "./progressbar.svelte";
  import TypeInput from "./typeInput.svelte";
  import TitleInput from "./titleInput.svelte";
  import TimeInput from "./timeInput.svelte";
  import GoalInput from "./goalInput.svelte";
  import NavBar from "../Navbar/+page.svelte";
  

  let isPressed = [true, false, false, false];
  let nameOfBoard = '';
  
  // @ts-ignore
  function handleEnterKey(event){
    if(event.key === 'Enter'){
      if (isPressed[3]) alert("Submit form");
      else if (isPressed[2]) isPressed[3] = true;
      else if (isPressed[1]) {
        if (nameOfBoard === '') alert("Please input board's name!");
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
    <TypeInput bind:changePage0 = {isPressed[1]}/>
  {:else if isPressed[1] == true && isPressed[2] == false}
    <TitleInput bind:changePage1 = {isPressed[2]} bind:nameOfBoard/>

  {:else if isPressed[2] == true && isPressed[3] == false}
    <TimeInput bind:changePage2 = {isPressed[3]}/>
  {:else} <GoalInput />
  {/if}
</div>

<style>
  :root{
    color-scheme: light;
  }
  .create-board-all{
    background-color: #182c25;
    height: 90.5vh;
    padding-top: 7rem;
  }

</style>

<!-- Form submit SVELTE https://www.youtube.com/watch?v=52nXUwQWeKI -->