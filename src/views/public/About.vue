<template>
<div class="about is-flex is-flex-direction-column is-align-items-center has-text-weight-bold pt-5" >
    <h1 class="  has-text-weight-bold is-size-2 " >About Me</h1>
    <div class="aboutme" >
     <p class=" me mb-3 mt-3 pl-4 pr-4 is-align-items-center">
         After 14 years of work in road transport, I decided to retrain.<br>
  Since April 2020 I am in Telepresential Training at O'CLOCK Fullstack Web Developer specializing in WORDPRESS.
This intensive training of 798 hours ended at the end of September, with the presentation of a project.
I am applying now for a first experience or an internship in this sector.
I am a determined person, ready to fully invest myself in this new career as a developer.</p>
</div>
<p class="mb-3 has-text-centered" >
Email: thomasroszak@protonmail.com / <br> Tel 06 29 52 06 99 <br>https://github.com/Thomas-ROSZAK-dry</p>
 <p>Below some pictures that represent me and my environment</p> 
    <div class=" is-flex is-flex-direction-column is-align-items-center has-text-weight-bold pt-5">      
        <img class="fit-picture pb-4"
     src="https://image.freepik.com/vecteurs-libre/gens-qui-regardent-film-au-cinema-film-ecran-audience-siege-spectacle-concert-presentation-auditorium-rangee-divertissement_1284-43691.jpg"
     alt="Movie Screen" width="400" >
        <img class="fit-picture  pb-4"
     src="https://image.freepik.com/vecteurs-libre/ondes-abstraites-brillantes-notes-musique_1302-6325.jpg"
     alt="Music Note" width="400" >
      <img class="fit-picture pb-4 "
     src="/assets/img/canal.jpg "
     alt="Image du canal de l'Ourcq" width="400">

    </div>
</div>
    
</template>

<script>

</script>

<style scoped>
.about {
     background:lightgrey;
}
.fit-picture {
    border-radius:5px
}
.aboutme {
   display: flex;
   border: 2px grey solid;
    width: 60vw;
    margin-top:20px;
    margin-bottom: 20px;
    border-radius:5px;
}
@media screen and (min-width: 1040px) {
.fit-picture {
    width:80vh;
}
.aboutme {
   display: flex;
   border: 2px grey solid;
    width: 60vw;
    margin-top:20px;
    margin-bottom: 20px;
    border-radius:5px;
}
}
</style>
