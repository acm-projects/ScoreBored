<script>
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import "./signIn.css";
    
</script>

<NavBar />
<div class="signin-background">
    <div class="signin-all">
        <h1 class="signin-header-text">Welcome back</h1>
        <span class="text-xl">Don't have an account?&nbsp;</span> 
        <a href="/signUp"><span class="text-xl underline underline-offset-1 font-semibold">Create now</span> </a>

        <form action="POST" class="signin-form">
            <p class="text-md">Email</p>
            <input name = "email" type="email" class="signin-input-box"/>
            
            <p class="text-md">Password</p>
            <input name = "password" type="password" class="signin-input-box"/>
        
            <a href="/"><p class="signin-forgotpass">Forgot password?</p></a>
            <button class="signin-button">Sign in</button>
        </form>
        <div class="signin-or-line">
            <hr class="signin-line ml-1"/>
            <span>OR</span>
            <hr class="signin-line mr-1"/>
        </div>

        <div class="signin-google">
            <button type="submit" class="signin-google-btn">
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