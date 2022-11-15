<template>
  
   <div class="card">
     <div class="card-content">
    <div class="media">
      <div class="media-left">
        <!--<figure class="image is-96x96 ml-6" >
           <img class="" src="https://img.freepik.com/photos-premium/developpement-programmeur-developpement-technologies-conception-codage-sites-web-travaillant-dans-bureau-societe-logiciels_18497-1234.jpg?w=1380" alt="profile photo">
          </figure>-->
       
      </div>
       
    </div>
    <div class=" text is-uppercase ">
      <div class="media-content ">
        <p class="is-size-1 has-text-weight-bold mt-6 "><a href="https://github.com/Thomas-ROSZAK-dry" target="_blank" >{{title}}</a></p>
        <router-link to="/Contact" ><p class="subtitle is-6 has-text-weight-bold mt-3 is-uppercase is-underlined is-italic	">{{email}}</p></router-link>
      </div>
       👋 <br>
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
  </div>

   
</template>

<script lang="ts">
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
.media {
  margin-top:6rem;
}
@media screen and (min-width: 1040px) {

.text {
  line-height:2.5rem;
  color: black
}
  .img {
    width:80vh;
  }
  .card-content {
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight: 800;
    margin-top: -400px
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
  height:90vh;
  
}
}
</style>
