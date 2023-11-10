<script lang="ts">
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import Home from "../Home/+page.svelte";
    import "./signIn.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    // import ts file
    import { auth, user } from "$lib/firebase/firebase";
    import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

    let mail = '';
    let password = '';

    async function redirectToCreateBoard(){
        window.location.href = "/createBoard"
    }
    
    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        redirectToCreateBoard();
    }

    async function signInWithEmail() {
        await signInWithEmailAndPassword(auth, mail, password);
        redirectToCreateBoard();
    }


</script>
<NavBar />
<div class="signin-background">
    <div class="signin-all">
        <h1 class="signin-header-text">Welcome back</h1>
        <span class="text-xl">Don't have an account?&nbsp;</span> 
        <a href="/signUp"><span class="text-xl underline underline-offset-1 font-semibold">Create now</span> </a>

        <div class="signin-form">
            <p class="text-md">Email</p>
            <input name = "email" type="email" bind:value={ mail } class="signin-input-box"/>
            
            <p class="text-md">Password</p>
            <input name = "password" type="password" bind:value={ password } class="signin-input-box"  />
        
            <a href="/forgotPassword"><p class="signin-forgotpass">Forgot password?</p></a>
            <button class="signin-button" on:click={ signInWithEmail }>Sign in</button>
        </div>
        <div class="signin-or-line">
            <hr class="signin-line ml-1"/>
            <span>OR</span>
            <hr class="signin-line mr-1"/>
        </div>

        <div class="signin-google">
            <button type="button" class="signin-google-btn" on:click={ signInWithGoogle }>
                    <i class="fa-brands fa-google"></i>
                    <div class="signin-google-text">
                        <p>Continue with Google</p>
                    </div>
            </button>
        </div>
    </div>
</div>

<style>
    .signin-background {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>

