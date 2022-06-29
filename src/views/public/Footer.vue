<template>
<div class="bottom has-text-weight-bold">
  <div class="pr-5" ><p><i class="fas fa-copyright fa-2x">2021</i></p></div>
  <div class="pr-5"><p>{{name}} </p></div>
  <div></div>
  
  <div> <a href="https://github.com/Thomas-ROSZAK-dry" target="_blank"> <i class="fab fa-github fa-2x pr-5"></i></a></div>
  <div> <a href="https://www.linkedin.com/in/thomas-roszak/"  target="_blank"><i class="fab fa-linkedin-in fa-2x pr-5"></i></a> </div>
  <div><p><router-link to="/AdminConnect"><i class="fas fa-user-lock fa-2x"></i></router-link></p></div> 
    </div>
</template>

<script> 
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
  justify-content:center;
  align-items:center;
  height: 10vh;
}


a {
 color:black;
}
.bottom {
  background: lightgrey;
}

</style>
