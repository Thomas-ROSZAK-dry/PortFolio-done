<template>
  
   <div class="card">
     <div class="card-content mb-1">
    <div class="media mb-6">
      <div class="media-left">
        <figure class="image is-96x96 ml-6" >
          <img class="photo" src="https://img.freepik.com/photos-premium/developpement-programmeur-developpement-technologies-conception-codage-sites-web-travaillant-dans-bureau-societe-logiciels_18497-1234.jpg?w=1380" alt="profile photo">
        </figure>
       
      </div>
        <div class="media-content mr-6">
        <p class="is-size-3 has-text-weight-bold"><a href="https://github.com/Thomas-ROSZAK-dry" target="_blank" >{{title}}</a></p>
        <router-link to="/Contact" ><p class="subtitle is-6 has-text-weight-bold">{{email}}</p></router-link>
      </div>
    </div>
    <div class="content has-text-weight-bold pt-3 pb-3 pl-3 pr-3">
      </div>
      Hi  👋 <br>
 🔭 I’m working on WORDPRESS and VueJS on my professional reorientation  <br>
 🌱 I’m currently learning VueJS and NuxtJS and improve my skills on WORDPRESS<br>
 👯 I’m also to collaborate on projects to improve my coding<br>
🤔 I also try to improve my backend's skills <br>
💬 Ask me about my goals, hobbies <br>
I working to present myself  this year for the profesionnal Title of Dev web et web mobile Level 3<br>
You'll find some of my project I'm working,  some in progress, also some informations about me <br>
You can also contact me directly if you want.
   
      <br>
      
    </div>
  </div>

   
</template>

<script>
export default {
  data() {
    return {
      title:'Thomas ROSZAK',
      email:'thomasroszak@protonmail.com'
    }
  }
}

</script>

<style scoped>
/* .card-content{
  background-image: url("https://image.freepik.com/vecteurs-libre/fond-ciel-stellaire-aquarelle_125540-28.jpg");
 background-repeat: no-repeat;
 background-size:cover;
 height:100vh;
 width: 100vw;

 } */

.card {
  background-image: url('');
  background-repeat: no-repeat;
  background:lightgray;
  height:100vh;
  display: flex;
  flex-direction: row;
    align-items: center;
    justify-content: center;
}
.photo {
  border-radius: 5px;
  border: 2px solid black;
}
a {
  color: black;
}
@media screen and (min-width: 1040px) {
  .img {
    width:80vh;
  }
  .card-content {
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight: 800;
    margin-top: -420px
  }
.content {
  width:80vh;
}
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
     background-image: url('https://img.freepik.com/photos-gratuite/batiments-modernes_1127-2851.jpg?t=st=1657471356~exp=1657471956~hmac=ef3b3e77f470220d36bb050bed73edc439e85bfe5d121f5d1828b94458fb209a&w=1380');
  background-repeat: no-repeat;
  background-size:cover;
  height:100vh;
  
}
}
</style>
