<script>
    // @ts-nocheck
    import "./titleInput.css";
    let nameOfBoard = '';

    export let changePage1 = false;

    function changePage () {
        changePage1 = true;
    }
    </script>
    
    <div class="titleInput-all">
        <div class="titleInput-header-container">
            <h1 class="titleInput-header-text">Name your board!</h1>
        </div>
    
        <div class="titleInput-box">
            <input bind:value = {nameOfBoard} type="text" placeholder="Board's title" id="title-Input">
    
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