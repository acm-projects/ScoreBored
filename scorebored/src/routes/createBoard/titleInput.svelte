<script>
    // @ts-nocheck
    import "./titleInput.css";
    let nameOfBoard = '';
    </script>
    
    <div class="title-all">
        <div class="title-header-container">
            <h1 class="title-header-text">Name your board!</h1>
        </div>
    
        <div class="title-box">
            <input bind:value = {nameOfBoard} type="text" placeholder="Board's title" id="title-Input">
    
        </div>
    </div>