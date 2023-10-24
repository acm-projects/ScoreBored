<script>
  import Progressbar from "./progressBar.svelte";
  import TypeInput from "./typeInput.svelte";
  import TitleInput from "./titleInput.svelte";
  import TimeInput from "./timeInput.svelte";
  import GoalInput from "./goalInput.svelte";

  let isPressed = [true, false, false, false];
  let isQuantity = false;


</script>

<!-- Navbar here -->
<Progressbar bind:isClicked={isPressed} />
{#if isPressed[0] == true && isPressed[1] == false}
  <TypeInput bind:quantityType = { isQuantity }
  bind:changePage0 = {isPressed[1]}/>
{:else if isPressed[1] == true && isPressed[2] == false}
  <TitleInput bind:changePage1 = {isPressed[2]}/>

{:else if isPressed[2] == true && isPressed[3] == false}
  <TimeInput bind:changePage2 = {isPressed[3]}/>
{:else} <GoalInput />
{/if}

<style>
  
</style>