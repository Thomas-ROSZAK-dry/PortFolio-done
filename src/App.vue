<template>
  <div id="app"></div>
  <Header />
 <!--header + footer-->
 <router-view />
 <Footer></Footer>
 </template>


<script lang="ts">
import Footer from '@/views/public/Footer.vue'
import Header from '@/views/public/Header.vue'



export default {
  // on définit des données valables dans ce composant
  name:' App',
  // je préviens mon composant App qu'il peut utiliser le composant Header
  components : {
    Header,
    Footer
  }
 
}
  




</script>


<style lang="scss">

</style>
