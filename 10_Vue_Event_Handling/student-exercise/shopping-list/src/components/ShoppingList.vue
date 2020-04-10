<template>
    <div class= "shopping-list">
        <h1> Guess!! What I am going to buy </h1>
        <ul>
            <li v-for= "list in shopping" v-bind:key= "list.id" v-bind:class = "{'completed' : list.completed}" 
            v-on:click = "changeStatus(list.id)">
                <input type="checkbox"  v-model = "list.completed" />
               {{list.item}}
                <i class="far fa-check-circle" v-bind:class="{ completed: list.completed }"></i>
              

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopping : [
                { id: 1, item: 'Pencil' , completed : false},
                { id: 2, item: 'Book' , completed : false},
                { id: 3, item: 'Note' , completed : false},
                { id: 4, item: 'Cutter' , completed : false},
                { id: 5, item: 'Water' , completed : false},
                { id: 6, item: 'Eraser' , completed : false},
                { id: 7, item: 'Phone' , completed : false},
                { id: 8, item: 'Coke' , completed : false},
                { id: 9, item: 'Tissue paper' , completed : false},
                { id: 10, item: 'Pepsi' , completed : false},
                { id: 11, item: 'Pillow' , completed : false},
                { id: 12, item: 'Blanket' , completed : false}
            ]

        }
    },
    methods : {
        changeStatus (id) {
            const arrIndex = this.shopping.findIndex((list) => list.id == id);
            this.shopping[arrIndex].completed = !this.shopping[arrIndex].completed;
        }
    }
}



</script>

<style>
.shopping-list {
    width:450px;
    background: #fff;
    margin: 50px auto;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 10px;
}
h1 {
    background:#f2f2f2;
    color:#5c8578;
    padding:10px;
    font-size:24px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
ul {
    list-style-type: none;
    margin:0px;
    padding:0px;
}
li {
    font-size: 24px;
    border-bottom:1px solid #f2f2f2;
    padding:10px 20px;
}
li:last-child{
    border:0px;
}
li.completed {
    text-decoration: line-through;
    color:darkgrey;
}
i.far.fa-check-circle { 
    float:right;
    color: darkgray;
}

i.far.fa-check-circle.completed {
    color:green;
}
input[type="checkbox"] {
    font-size:40px;
    vertical-align: middle;
    margin-top:0px;
}
</style>
