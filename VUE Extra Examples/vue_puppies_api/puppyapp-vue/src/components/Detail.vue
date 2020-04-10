<template>
<div id='main'>
This is the puppy you selected. <br>

Name: {{puppy.name}} <br>
Gender: {{puppy.gender}}<br>

Weight:<input type='text' v-model='puppy.weight'/> <br>
PaperTrained:<input type='text' v-model='puppy.paperTrained'/> <br><br>

<button id='update-btn' v-on:click='updatePuppy'>Update Data?</button>
</div>
</template>


<script>
export default {
    data() {
        return {
            puppy : {}
        }
    },
    methods: 
    {
        getPuppyData(id) {

            fetch(`http://localhost:8080/01-Puppies-API-Final/api/puppy/${id}`)
            .then (
                (response) => {return response.json();}
            )
            .then ( 
                (dogData) => {this.puppy = dogData; console.log(this.puppy);}
            )
            .catch(
                (err) => {console.error(err + ' uh oh missing doggos!'); }
            )
        },

        updatePuppy() {
   
        }

    },
    created() {
        this.getPuppyData(this.$route.params.id);
    },
}
</script>