<script>
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import "./signUp.css";

    let show_password = false;
    $: type = show_password ? 'text' : 'password';
    
</script>

<NavBar />
<div class="signup-background">
    <div class="signup-all">
        <h1 class="signup-header-text">Welcome!</h1>

        <span class="text-xl">Have an account?&nbsp;</span>
        <a href="/signIn"><span class="text-xl underline underline-offset-1 font-semibold">Sign in</span></a>


        <form action="POST" class="signup-form">
            <div class="signup-name-mail">
                <div class="signup-name">
                    <p class=" pl-1">Name</p>
                    <input name = "name" type = "text" class="signup-input-box"/>
                </div>

                <div class="signup-gmail">
                    <p class="pl-1">Email</p>
                    <input name = "email" type = "email" class="signup-input-box"/>
                </div>
            </div>
            <div class="signup-password">
                <p class="text-md pl-1">Password</p>
                <input name = "password" {type} class="signup-input-box" id="signup-password-input"/>
                
                <div class="show-hid-btn">
                    <input type="checkbox" on:click="{ () => show_password = !show_password }" id="show-hid"/>
                    <label for="show-hid">{show_password ? 'Hide' : 'Show'} </label>
                </div>

            </div>

            <button class="signup-button">Sign up</button>
        </form>

        
    </div>
</div>

<style>
    .signup-background {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>