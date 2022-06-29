<template>
    <div class="projects about is-flex is-flex-direction-column is-align-items-center has-text-weight-bold pt-5 " >
      <h1 class="  has-text-weight-bold is-size-2">MY PROJECTS</h1>
      <p class=" text mt-4 has-text-centered" >Please find the link below to my different projects done or in progress</p>  
    
<ul>
    <div class="around" >
    <li class="mt-6" > <a href="https://compassionate-hermann-ce85e9.netlify.app" target="_blank">SlayerMonster Slayer</a></li>
    <p class="text pb-6" >Project build with: <br> VUEJS, JS, BULMA, HTML , CSS, </p>
    
     <p class=" work pb-3 is-size-3 is-undelined" >WORK IN PROGRESS:</p>
    
    <li id="WorInProgress" ><router-link to="/Wip">Eglise St Michel</router-link></li>
    <p class="text pb-6" >Project in progress build with : <br> HTML, CSS, BULMA, VUEJS, VUEFIRE
    </p>
   <p class=" work pb-3 is-size-3 is-undelined" >WORK IN PROGRESS:</p>
     <li><router-link to="/Wip">Jean Renoir Le Septième Art</router-link></li>
    <p class="text pb-6" >Project in: <br> Full WORPDRESS
    </p>
     <p class=" work is-size-3 is-undelined" >WORK IN PROGRESS:</p>
     <li><router-link to="/Wip"> Odrive</router-link></li>
    <p class="text" >Project in: <br> Full WORPDRESS
    </p>
</div>
</ul>
    </div>
</template>

<script>

</script>

<style scoped>
.projects {
    background: lightgrey;
    
}
a {
    color: brown;
    font-size: xx-large ;
}
.text {
  font-size: x-large;
}
.work {
    text-decoration: underline;
}
.around { 
    text-align: center;
}
</style>
