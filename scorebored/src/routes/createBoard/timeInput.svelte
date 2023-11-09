<script>
// @ts-nocheck

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

    function selectDay () {
        timeSelected = "day";
    }
    function selectWeek () {
        timeSelected = "week";
    }
    function selectMonth () {
        timeSelected = "month";
    }
</script>


<div class="timeInput-all">
    <div class="timeInput-header-container">
        <h1 class="timeInput-header-text">
            3. Select time setting!
        </h1>
    </div>

    <div class="timeInput-box">
        <div class="time-options">
            <div class="time-option-box">
                <input type="radio" id="day-select" checked='checked' name="radio-box" on:click = { clearInput } on:click = { selectDay}/>
                <label for="day-select" class="time-option-surround-box" >Day&nbsp;&nbsp;</label>
            </div>

            <div class="time-option-box">
                <input type="radio" id="week-select" name="radio-box"
                on:click = { clearInput } on:click = { selectWeek}/>
                <label for="week-select" class="time-option-surround-box" >Week&nbsp;</label>
            </div>

            <div class="time-option-box">
                <input type="radio" id="month-select" name="radio-box"
                on:click = { clearInput } on:click = { selectMonth }/>
                <label for="month-select" class="time-option-surround-box" >Month</label>
            </div>
        </div>

        <div class="frequency-box">
            <span>Planned time period:</span>
            <input type = "number" bind:value={ frequency } min="1" id="frequency-number"/>
            <span>{frequency === 1? timeSelected:timeSelected+'s'}</span>
        </div>
    </div>
    <div class="enter-btn">
        <button class="ok-btn" on:click={changePage}>
            <div class="ok-text">OK <i class="fa-solid fa-check"/>
            </div>
        </button>
        <span class="enter-text">Press Enter &#9166;</span>
    </div>
    
</div>