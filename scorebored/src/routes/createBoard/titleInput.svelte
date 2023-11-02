<script>
    // @ts-nocheck
    import "./titleInput.css";
    export let nameOfBoard = '';

    export let changePage1 = false;

    function changePage () {
        if (nameOfBoard === '') alert("Please input board's name!");
        else changePage1 = true;
    }
    </script>
    
    <div class="titleInput-all">
        <div class="titleInput-header-container">
            <h1 class="titleInput-header-text">2. Name your board!</h1>
        </div>
    
        <div class="titleInput-box">
            <input bind:value = {nameOfBoard} type="text" placeholder="Board's title" id="title-Input" required>
    
        </div>

        <div class="enter-btn">
            <button class="ok-btn" on:click={changePage}>
                <div class="ok-text">OK <i class="fa-solid fa-check"/>
                </div>
            </button>
            <span class="enter-text">Press Enter &#9166;</span>
        </div>
    </div>