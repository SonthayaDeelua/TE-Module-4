<template>
  <div id='main'>
     
      <form>
        Name: <input id='dog-name' v-model='puppy.name' /> <br>
        Weight: <input id='dog-weight' v-model='puppy.weight' /><br>
        Gender: <select id='dog-gender' v-model='puppy.gender'>   
            <option value='Male' selected>Male</option>    
            <option value='Female'>Female</option>              
        </select><br>
        Paper Trained? <select id='dog-paper-trained' v-model='puppy.paperTrained'>
            <option value='true' selected>True</option>    
            <option value='false'>False</option>     
        </select><br>    
        <button id='dog-add-btn' v-on:click='saveReview'>Add Doggo!</button>
      </form>

  </div>
</template>

<script>
export default {

    data() {
        return { 
            puppy: {
                name: '',  
                weight: '',
                gender: '',
                paperTrained: ''   
            }
        };
    },
    methods: {
        saveReview() {
            fetch('http://localhost:8080/01-Puppies-API-Final/api/newPuppy',
                {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.puppy)
            })
            .catch(
                (err) => {console.error(err + ' problem adding doggo!'); }
            )
        }

    }
}
</script>

<style>

</style>