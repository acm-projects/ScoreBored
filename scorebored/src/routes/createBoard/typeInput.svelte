<script>
// @ts-nocheck
    
    import "./typeInput.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";

    export let quantityType = true;
    
    export let changePage0 = false;

    function changePage () {
        changePage0 = true;
    }

    const chooseQuantity = function () {
        quantityType = true;
    }

    const chooseChecklist = function () {
        quantityType = false;
    }
    
    

</script>

<div class="typeInput-all">
    <div class="typeInput-header-container">
        <h1 class="typeInput-header-text">1. Choose the type!</h1>
    </div>

    <div class="typeInput-box">
<!-- https://www.youtube.com/watch?v=sSF0bXFUFGM -->
        <input type="radio" id="quantity-box" name="radio-box"  on:click = {chooseQuantity} checked='checked'/>
        <label for="quantity-box" class="type-surround-box">Quantity</label>

        <input type="radio" id="checklist-box" name="radio-box"  on:click = {chooseChecklist}/>
        <label for="checklist-box" class="type-surround-box">Checklist</label>

        
        
        <div class="enter-btn">
            <button class="ok-btn" on:click={changePage}>
                <div class="ok-text">OK <i class="fa-solid fa-check"/>
                </div>
            </button>
            <span class="enter-text">Press Enter &#9166;</span>
        </div>
        

    </div>
</div>