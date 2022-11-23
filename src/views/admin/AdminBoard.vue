<template>

    <section class='messages' >
      <h2>Messages</h2>
     <div>
            <button @click="loadMessages" >Load Messages</button>
          </div>
    <ul>
    
    <messages-item v-for="result in results" 
    :key="result.id"  
    :name="result.name"
    :email="result.mail"
    :subject="result.subject"
    :message="result.message"
    >
    </messages-item>
    </ul>
    </section>
    </template>
    
    <script>
    import MessagesItem from './MessagesItem';
    import axios from "axios";
    
    
    export default {
      components: {
        MessagesItem,
           
          },
    
     data() {
        return {
          results: [],
             }
      },
     methods: {
       loadMessages() {
        axios.get('https://portfolio-db747-default-rtdb.europe-west1.firebasedatabase.app/messages.json').then( (response) => {
        
           this.results = response.data;
        })
       .catch((error) => {
         console.log(error);
        //  on teste avec le .catch quand il n'y a pas de loading
        //  on mets le loading à false
      
       });
     },
    
    },
     // quand ce composant user experiences sera exécuté, la fonction loadexperiences le sera  automatiquement
     
    }
    </script>
    
    <style scoped>
    .messages {
       background:lightgrey;
    }
    </style>  >
    
    