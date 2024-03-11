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
  
 <script lang="ts"> 
  
    </script>
 
 
 
 <style  lang="scss" scoped >
 a {
  color: black;
 }
 
 .navbar-menu {
  background-color: lightgrey;
  margin-left: -24px;
 }
 </style>