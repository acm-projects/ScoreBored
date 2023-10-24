<script>
    import "./timeInput.css";
    export let timeSelected = "day";
    export let frequency = 1;

    let options = ['day', 'week', 'month'];

    const clearInput = function () {
        frequency = 1;
    }
    export let changePage2 = false;

    function changePage () {
        changePage2 = true;
    }
</script>


<div class="timeInput-all">
    <div class="timeInput-header-container">
        <h1 class="timeInput-header-text">
            Select time setting!
        </h1>
    </div>

    <div class="timeInput-box">
        <form class="timeInput-form">
            <span>Display your chart in:</span>
            <select bind:value={ timeSelected } on:change={clearInput} id="timeInput-option" required>
                {#each options as opt}
                    <option>{opt}</option>
                {/each}
            </select>
        </form>

        <div class="frequency-box">
            <span>Planned time period:</span>
            <input type = "number" bind:value={ frequency } min="1" id="frequency-number"/>
            <span>{frequency === 1? timeSelected:timeSelected+'s'}</span>
        </div>
    </div>
    <div class="enter-btn-center">
        <div class="enter-btn">
            <button class="ok-btn" on:click={changePage}>
                <div class="ok-text">OK <i class="fa-solid fa-check"/>
                </div>
            </button>
            <p class="enter-text">Press Enter &#9166;</p>
        </div>
    </div>
    
</div>