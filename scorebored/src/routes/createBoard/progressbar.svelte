<script>
  import "./progressBar.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  export let isClicked = [true, false, false, false];
  function toggleCircle0() {
    isClicked = [true, false, false, false];
  }
  function toggleCircle1() {
    isClicked = [true, true, false, false];
  }
  function toggleCircle2() {
    isClicked = [true, true, true, false];
  }
  function toggleCircle3() {
    isClicked = [true, true, true, true];
  }
</script>

<div class="progressbar">
  <ol class="listofitem">
    <li class="item">
      <h2 class="bar-text">Type</h2>
      <button on:click={toggleCircle0}>
        {#if isClicked[0]}
          <i class="fa-solid fa-circle circle-icon" />
        {:else}
          <i class="fa-regular fa-circle circle-icon transition delay-150" />
        {/if}
      </button>
      <!-- can toggle between fa-solid and fa-regular -->
    </li>
    <hr class="connectline" id="connectline1" />

    <li class="item">
      <h2 class="bar-text">Title</h2>
      <button on:click={toggleCircle1}>
        {#if isClicked[1]}
          <i class="fa-solid fa-circle circle-icon" />
        {:else}
          <i class="fa-regular fa-circle circle-icon" />
        {/if}
      </button>
    </li>

    <hr class="connectline" />
    <li class="item">
      <h2 class="bar-text">Time</h2>
      <button on:click={toggleCircle2}>
        {#if isClicked[2]}
          <i class="fa-solid fa-circle circle-icon" />
        {:else}
          <i class="fa-regular fa-circle circle-icon" />
        {/if}
      </button>
    </li>

    <hr class="connectline" />
    <li class="item">
      <h2 class="bar-text">Goal</h2>
      <button on:click={toggleCircle3}>
        {#if isClicked[3]}
          <i class="fa-solid fa-circle circle-icon" />
        {:else}
          <i class="fa-regular fa-circle circle-icon" />
        {/if}
      </button>
    </li>
  </ol>
</div>

<style>
</style>
