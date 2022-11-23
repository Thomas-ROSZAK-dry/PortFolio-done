<template>
<div class="bottom is-size-7">
  <div class="pr-5" ><p><i class="fas fa-copyright fa-2x">2021</i></p></div>
  <div class="pr-5 has-text-weight-bold"><p>{{name}} </p></div>
  <div></div>
  
  <div> <a href="https://github.com/Thomas-ROSZAK-dry" target="_blank"> <i class="fab fa-github fa-2x pr-5"></i></a></div>
  <div> <a href="https://www.linkedin.com/in/thomas-roszak/"  target="_blank"><i class="fab fa-linkedin-in fa-2x pr-5"></i></a> </div>
  <div><p><router-link to="/AdminConnect"><i class="fas fa-user-lock fa-2x"></i></router-link></p></div> 
    </div>
</template>

<script lang="ts" > 
export default {
  data() {
    return {
     name:'Thomas ROSZAK',
      };
  },
 
};
</script>

<style scoped>
.bottom {
  display:flex;
  margin-left: 700px;
  align-items:center;
  height: 8vh;
  
}


a {
 color:black;
}

</style>
