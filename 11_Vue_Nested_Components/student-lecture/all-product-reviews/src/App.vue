<template>
  <div id="app">
    <search-bar v-on:filter = 'handleFilter'/>
    <product-review name = 'Cigar Party For Dummies' v-bind:filterText = 'filter' description= 'Host and plan cigar parties for all your squirrely friends!'/> 
    <product-review name = 'Hacking your gray sofa' v-bind:filterText = 'filter' description='using!'/>
  </div>
</template>

<script>
import ProductReview from './components/ProductReview.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'app',
  components: {
    ProductReview,
    SearchBar
  },
  data() {
    return {
      filter: ''
    };
  },
  methods: {
    handleFilter(searchText) {
      this.filter = searchText;
      console.log(this.filter);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app div.main {
  display: inline-block;
  width: 45%;
  padding: 1em;
  border: 1px black solid;
  border-radius: 5px;
  margin: 0 1em;
  vertical-align: top;
}
</style>
