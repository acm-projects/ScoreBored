<nav>
    <a href="/"><img src="./logo.jpg" alt=""/></a>
    <div class="menu-btn" id="menu-btn">
        <a href="#"><i class="fa-solid fa-bars"></i></a>
    </div>
    <div class="menu-icon" id="myTopnav">
        <ul class="main-menu">
            <li><a href="/Home">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Tutorial">Tutorial</a></li>
            <li><a href="/SignIn">Sign In</a></li>
        </ul>
       
    </div>
    
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
    background-color: black;
    transition: width 0.3s ease;
}

ul li a::after {
    content: "";
    position: absolute;
    top: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
}

ul li a:hover::before {
    width: 100%;
}

ul li a:hover::after {
    width: 100%;
}

.menu-icon .icon{
    display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .menu-icon a:not(:first-child) {display: none;}
  .menu-icon a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .menu-icon.responsive {position: relative;}
  .menu-icon.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu-icon.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

</style>





