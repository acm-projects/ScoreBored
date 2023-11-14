<script lang="ts">
    import "./forgotPassword.css";
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import {auth, user} from "$lib/firebase/firebase"
    import { sendPasswordResetEmail } from "firebase/auth";
    let email = '';

    async function resetPass(){
        if (!email) {
            console.log('Please input valid email!');
            return;
        }
        await sendPasswordResetEmail(auth, email);
        window.location.href = '/signIn';
    }
</script>

<NavBar />

<div class="forgotPass-background">
    <div class="forgotPass-all">
        <h1 class="forgotPass-header-text">Forgot your password?</h1>
        <h3 class="forgotPass-header-subtext">No worries we'll send you recover email.</h3>

        <div class="forgotPass-email-input">
            <p class="text-xl">Enter your mail</p>
            <input name = "mail" type = "mail" class="forgotPass-input-box" bind:value={email}/>
        </div>

        <button class="forgotPass-reset-btn" type="button" on:click={ resetPass }>Reset password</button>
    </div>
</div>

<style>
    .forgotPass-background {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>