<script lang="ts">
    // @ts-ignore
    import NavBar from "../Navbar/+page.svelte";
    import "./setUsername.css";

    let username = 'asdfasdf';
    let isAvailable = false;

    async function confirmUsername() {
        isAvailable = !isAvailable;
        console.log(isAvailable);
    }

    async function checkAvailability() {
        
    }
    
</script>

<NavBar />

<div class="setUsername-background">
    <div class="setUsername-all">
        <h1 class="setUsername-header-text">Set your unique username!</h1>

        <input class="setUsername-input-box" type="text" on:input = { checkAvailability }/>
        {#if isAvailable}
            <p class="setUsername-check-text">Username is {isAvailable? `available`:`not available`}</p>
        {:else}
            <p class="setUsername-check-text setUsername-check-false">Username is {isAvailable? `available`:`not available`}</p>
        {/if}
        
        <button type="submit" class="setUsername-btn" on:submit|preventDefault={ confirmUsername }>Confirm your username: {username}</button>
        
    </div>
</div>


<style>
    .setUsername-background{
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>