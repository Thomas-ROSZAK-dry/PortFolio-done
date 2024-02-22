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
    <div class=" text ">
      <div class="media-content ">
        <p class="is-size-1 has-text-weight-bold mt-6 "><a href="https://github.com/Thomas-ROSZAK-dry" target="_blank" >{{title}}</a></p>
        <router-link to="/Contact" >📩<p class="has-text-weight-bold  mt-4 	"> {{email}}</p></router-link><br><br>
      </div>
      🔭 Currently undergoing a career change, I'm honing my web development skills <br><br>
      🌱 As a dedicated learner, I'm continuously exploring VueJS. <br><br>
      👯 To accelerate my growth, I'm seeking collaborative projects <br><br>
      🤔 I’m looking for help with backend end dev. <br><br> 
      💬 Let's chat about my goals, hobbies, or how to reach me <br><br>
      📫 Contact: thomasroszak81@gmail.com <br><br>
      Aiming for 2024: improve and catch a title of web dev <br><br>
   I working to present myself  this year for the profesionnal Title of Dev web et web mobile Level 3<br><br>
   You'll find some of my project I'm working,  some in progress, also some informations about me <br><br>
   You can also contact me directly if you want.
   
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
  background-image: url('https://img.freepik.com/photos-gratuite/ville-jour-brouillard_1149-101.jpg?1&w=900&t=st=1701363038~exp=1701363638~hmac=e07ceeb4cdd461c073e7894367b227019027e2327d987b987c3d1c7188679e8b');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-size:cover;
  height:120vh;
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
  color: black
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
}
</style>
