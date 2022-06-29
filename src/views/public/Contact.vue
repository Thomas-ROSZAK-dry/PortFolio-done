<template>
<div class="form" >
<form @submit.prevent="submitData">
   <p v-if="confirmMessage" >{{confirmMessage}}</p>
  <label class="label pt-3">Your Name</label>
      <div class="control name">
           <input id="name" class="input" type="text" placeholder="Enter your name" v-model.trim="enteredName" />
      </div>

  <label class="label pt-3">Your Email</label>
      <div class="control has-icons-left has-icons-right ">
          <input class="input" type="email" placeholder="Email" v-model.trim=" enteredEmail"/>
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
         </span>
      </div>
  
  <label class="label  pt-5">Subject</label>
        <div class="control">
        <input class="input" type="text" placeholder="Enter Text" v-model.trim=" enteredSubject"/>
        </div>

  <label class="label  pt-5">Message</label>
          <div class="control">
          <textarea class="textarea" placeholder="Textarea" rows="10" v-model.trim=" enteredMessage"></textarea>
            </div>
  <div class="field is-grouped mb-6  pt-5">
  <div class="control1 pl-4">
    <button class="button is-link is-light mb-4">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light ml-4">Cancel</button>
  </div>
</div>
 <p v-if="invalidInput"> One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error">{{error}}</p>

</form>
 </div>

</template>

<script>
import axios from "axios";

 export default {
  data() {
    return {
      enteredName: '',
      enteredEmail:'',
      enteredSubject:'',
      enteredMessage:'',
      invalidInput: false,
      error:null,
      confirmMessage:''
    };
  },
  methods: {
    submitData(){ 
      if (this.enteredName === '' || this.enteredEmail === '' || this.enteredSubject === '' || this.enteredMessage === '') {
        this.invalidInput = true;
        return;
      }else
      this.invalidInput = false;
      this.error= null;
      this.confirmMessage ='Your mail has been sent';
     
      
       axios.post('https://portfolio-6e7af-default-rtdb.europe-west1.firebasedatabase.app/messages.json', {
       name: this.enteredName,
       mail: this.enteredEmail,
       subject: this.enteredSubject,
       message: this.enteredMessage,
       
        })
        // permets d'idnquer une erreur côté serveur 
        .catch((error) => {
        console.log(error);
        this.error ='failed to execute the request . Try it later'
        }),
      this.enteredName = '',
      this.enteredEmail='',
      this.enteredSubject='',
      this.enteredMessage=''
           
    }
    
   
  }
   }
 
</script>

<style scoped>

.fas {
  margin-left: 15px;
}
.form {
  background: lightgray;
  padding-left: 100px;
  padding-right: 100px;
  height: 150vh;
 }
input {
  font-weight: 700;
}
textarea {
  font-weight: 700;
}
.button.is-link.is-light {
  color:grey;
  font-weight: 700;
}
@media screen and (min-width: 1040px) {
.form {
    display: flex;
    justify-content: center;
    width: 100;
}
}
</style>
