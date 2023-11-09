<!-- set input like
Number of times: [input here] over the period of {time}
-->

<script>
    import "./goalInput.css";
    export let numberInput = 1;

    function submitBoardForm() {
        alert("Submit form!");
    }
</script>

<div class="goalInput-all">

    <div class="goalInput-header-container">
        <h1 class="goalInput-header-text">
            4. Create your goal!
        </h1>
    </div>

    <div class="goalInput-box">
        <span>Number of times: </span>
        <input type = "number" bind:value={ numberInput } min="1" id="goalInput-number"/>
        <span>per period</span>
    </div>
    <div class="enter-btn">
        <button class="ok-btn" on:click={ submitBoardForm }>
            <div class="ok-text">Submit <i class="fa-solid fa-check"/>
            </div>
        </button>
        <span class="enter-text">Press Enter &#9166;</span>
    </div>
</div>
