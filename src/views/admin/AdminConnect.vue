<template>
    
    <div class="admin-connect">
    <div class="home">
    <router-link to="/" class="button is-link is-light">Home</router-link>
  </div>
       
      <div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Email">
   
      <i class="fas fa-envelope"></i>
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-key"></i>
    </span>
  
  </div>
  
</div>

<div class="field">
  </div>

<div class="field is-grouped pt-5">
  <div class="control">
    <router-link to="/AdminBoard" class="button is-link is-light">Connexion</router-link>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>


<script>

</script>

<style scoped>
.admin-connect {
   background:lightgrey;
   padding-left: 100px;
   padding-right: 100px;
   height: 150vh; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.button.is-link.is-light {
  color:grey;
  font-weight: 700;
}
input {
  font-weight: 700;
}

</style>
