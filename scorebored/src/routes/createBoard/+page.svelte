<script>
  import Progressbar from "./progressbar.svelte";
  import TypeInput from "./typeInput.svelte";
  import TitleInput from "./titleInput.svelte";

  let isPressed = [true, false, false, false];
</script>

<!-- Navbar here -->
<Progressbar bind:isClicked={isPressed} />
{#if isPressed[0] == true && isPressed[1] == false}
  <TypeInput />
{:else if isPressed[1] == true && isPressed[2] == false}
  <TitleInput />
{/if}
<!-- <TypeInput />
<TitleInput /> -->

<!-- write condition when ispressed[0] == true then display TypeInput<TypeInput /> -->
