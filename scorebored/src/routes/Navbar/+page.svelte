<nav>
    <a href="/"><img src="./logo.jpg" alt=""/></a>
    <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    
        <ul class="main-menu">
            <li><a href="/Home">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Tutorial">Tutorial</a></li>
            <li><a href="/SignIn">Sign In</a></li>
        </ul>
    
</nav>




<style>

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

nav {
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 10px 20px;
    z-index: 1000;
    font-family: Noto Serif;

}

nav img {
    width: 50px; 
    margin-right: 20px;
    z-index: 1000;
}

ul {
    list-style: none;
    display: flex;
    font-family: Noto Serif;

}

ul li {
    margin-right: 40px;
    font-family: Noto Serif;

}

ul li a {
    text-decoration: none;
    color: black;
    position: relative;
    font-family: Noto Serif;

}

ul li a::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #A4E9BB;
    transition: width 0.3s ease;
}

ul li a::after {
    content: "";
    position: absolute;
    top: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #A4E9BB;
    transition: width 0.3s ease;
}


ul li a:hover::before {
    width: 100%;
}

ul li a:hover::after {
    width: 100%;
}

.toggle-button{
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}


.toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}
/*
@media(max-width: 800px){
    .toggle-button{
        display: flex;
    }
    .main-menu{
        display: none;
        width: 100%;
    }
    nav{
        flex-direction: column;
        align-items: flex-start;
    }

    .main-menu ul{
        wdith: 100%;
        flex-direction: column;
    }

    .main-menu{
        text-align: center;
    }

    .main-menu li a{
        padding: .5rem 1rem;
    }
    .main-menu.active{
        display: flex;
    }
}
*/
</style>





