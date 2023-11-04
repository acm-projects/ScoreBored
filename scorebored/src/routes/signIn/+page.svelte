<script>
    import "./signIn.css";
    // @ts-ignore
    import NavBar from "../NavBar/+page.svelte";
</script>

<NavBar />
<div class="signin-all">
    <h1 class="signin-header-text">Welcome back</h1>
    <h2 class="text-2xl font-semibold">Enter your credentials to access your account</h2>

    <form action="POST" class="signin-form">
        <label>
            Email
            <input name = "email" type="email"/>
        </label>

        <label>
            Password
            <input name = "password" type="password"/>
        </label>

        <button>Sign In</button>
    </form>
</div>

<style>
    :root {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>