<template>
<div id='main'>

    <div v-for='dog in allTheDogs' :key='dog.id'>
        {{dog.id}} <br> {{dog.name}} <br> {{dog.weight}} <br> <router-link :to="{name: 'display-detail', params: {id: dog.id}}"> Details! </router-link><br><br>
    </div>

</div>
  
</template>

<script>
export default {
    data() { 
        
        return { allTheDogs : []}
    },

  created() {
    fetch('http://localhost:8080/01-Puppies-API-Final/api/allPuppies')
    .then (
      (response) => {return response.json();}
    )
    .then ( 
        (dogData) => {this.allTheDogs = dogData; console.log(this.allTheDogs);}
    )
    .catch(
        (err) => {console.error(err + ' uh oh missing doggos!'); }
    )
  }
}

</script>

<style>

</style>`