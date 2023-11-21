<script>
    import "./navBar.css";
    import { auth, user } from "$lib/firebase/firebase";
    import { signOut } from "firebase/auth";

    async function redirectToSignIn(){
        window.location.href = "/signIn";
    }
    async function logOut(){
        await signOut(auth);
        redirectToSignIn();
    }

</script>
<nav class="nav-all">
    <a href="/"><h1 class="logo-text">SCOREBORED</h1></a>
    
    
    <ul class="navbar-main-menu">
        <a href="/Home" class="navbar-link">Home</a>

        {#if $user}
            <a href="/createBoard" class="navbar-link" >Create board</a>
        {:else}
            <a href="/signIn" class="navbar-link" >Create board</a>
        {/if}
        

        

        {#if $user}
            <a href="/yourProfile" class="navbar-link">Your profile</a>
            <button class="navbar-link" on:click={ logOut }>Sign out</button>
        {:else}
            <a href="/signIn" class="navbar-link">Sign In</a>
        {/if}
    </ul>
    
</nav>




