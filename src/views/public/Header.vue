<template>
   <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-navbar-fixed-top">
    <a class="navbar-item ">  <img src="https://image.flaticon.com/icons/png/512/1085/1085996.png" width="auto" height="auto">
    
    </a>
<i class="fa-solid fa-laptop-code"></i>
    <a role="button" class="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="nav-links" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item  ">
       <strong>Home</strong>
      </a>
    
          <a class="navbar-item">
           <strong>About</strong> 
          </a>
          <a class="navbar-item">
          <strong> Resume</strong>
          </a>
          <a class="navbar-item">
          <strong> Projects</strong>
          </a>
         <a class="navbar-item">
            <strong>Contact</strong>
          </a>
          </div>
          
      </div>
    
 
  
</nav>

</template>
 
 <script>
 window.onload=function(){
 const burgerIcon =document.querySelector('#burger');
 const navbarMenu = document.querySelector('#nav-links');
 const navbarNavigation =document.querySelector('.navbar-start')

 burgerIcon.addEventListener('click', () => {
 navbarMenu.classList.toggle('is-active');
   })
 navbarNavigation.addEventListener('click', () => {
 navbarMenu.classList.toggle('is-active');
   })
 }
   </script>



<style  lang="scss" scoped >
a {
   color:black;
   font-size:initial;
}
.navbar {
  background:lightgrey;
}
.navbar-item{
  background:lightgrey;
}
.navbar-menu {
  padding: 0;
}
</style>