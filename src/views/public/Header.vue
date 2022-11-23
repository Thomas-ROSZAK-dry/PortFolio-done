<template>
   <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-navbar-fixed-top">
    <a class="navbar-item ">  <img src="" width="auto" height="auto">
    
    </a>
<i class=""></i>
    <a role="button" class="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="nav-links" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item  ">
        <strong> <router-link :to= "{name:'home'}">Home</router-link></strong>
      </a>
    
          <a class="navbar-item">
            <strong> <router-link :to= "{name:'about'}">About</router-link></strong> 
          </a>
          <a class="navbar-item">
            <strong> <router-link :to= "{name:'resume'}">Resume</router-link></strong>
          </a>
          <a class="navbar-item">
            <strong> <router-link :to= "{name:'projects'}">Projects</router-link></strong>
          </a>
         <a class="navbar-item">
            <strong> <router-link :to= "{name:'contact'}">Contact</router-link></strong>
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


.navbar-menu {
  padding: 0;
}
</style>