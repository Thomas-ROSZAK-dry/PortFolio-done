<template>
<li class="item" >
  <header>
    <h3>{{name}}</h3>
    <h3>{{email}}</h3>
       <h3>{{subject}}</h3>
         <p>{{message}}</p>
    <button mode="flat" @click="deleteResource(id)" >Delete</button>
    </header>
   
</li>


</template>
<script>
export default {
  props: ['name', 'email', 'subject', 'message'],
  
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: lightgray;
  font-weight: 700;
  
}

a:hover,
a:active {
  color: #c89300;
}
.item {
  background: lightgrey;
}
</style>