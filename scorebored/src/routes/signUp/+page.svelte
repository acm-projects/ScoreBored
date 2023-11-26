<script lang="ts">
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import "./signUp.css";
    import { auth} from "$lib/firebase/firebase";
    import { createUserWithEmailAndPassword } from "firebase/auth";

    let show_password = false;
    $: type = show_password ? 'text' : 'password';

    let email = '';
    let username = '';
    // username later
    let password = '';

    async function redirectToCreateBoard(){
        window.location.href = "/createBoard";
        
    }
    

    async function handleSubmit() {
        if (!email || !password) return;

        try {
            
            await createUserWithEmailAndPassword(auth, email, password);
            await redirectToCreateBoard();
        } catch (err){
            console.log(err);
        }
    }
</script>

<NavBar />
<div class="signup-background">
    <div class="signup-all">
        <h1 class="signup-header-text">Welcome!</h1>

        <span class="text-xl">Have an account?&nbsp;</span>
        <a href="/signIn"><span class="text-xl underline underline-offset-1 font-semibold">Sign in</span></a>


        <div class="signup-form">
            

            <div class="signup-gmail">
                <p class="pl-1">Email</p>
                <input name = "email" type = "email" class="signup-input-box" bind:value={email}/>
            </div>
            
            <div class="signup-password">
                <p class="text-md pl-1">Password</p>
                <input name = "password" bind:value={password} {...{type}} class="signup-input-box" id="signup-password-input" />
                
                <div class="show-hid-btn">
                    <input type="checkbox" on:click="{ () => show_password = !show_password }" id="show-hid"/>
                    <label for="show-hid">{show_password ? 'Hide' : 'Show'} </label>
                </div>

            </div>

            <button class="signup-button" on:click={ handleSubmit }>Sign up</button>
        </div>

        
    </div>
</div>

<style>
    .signup-background {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>