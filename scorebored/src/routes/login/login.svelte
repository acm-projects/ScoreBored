<script lang="ts">
    import { auth, user } from '$lib/firebase/firebase';

    import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";

    export async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const userResult = await signInWithPopup(auth, provider);
        console.log(userResult)
    }

    export function signOut() {
        firebaseSignOut(auth);
    }

</script>

<h2>Login</h2>

{#if $user}
  <h2 class="card-title">Welcome, {$user.displayName}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button class="btn btn-warning" on:click={() => signOut()}>Sign out</button>
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}

