<template>
    <div class="search">
        <input type="text" id="search" name="search" placeholder="Search Shopping List..." v-model="searchText" @keyup="search" />
    </div>
</template>

<script>
export default {
    name: "shopping-search",
    data() {
        return {
            searchText: ""
        }
    },
    methods: {
        search() {
            this.$emit("searchLists", this.searchText);
        }
    }
}
</script>

<style>
#search {
    width:100%;
    font-size:24px;
    font-family: 'Roboto Condensed', sans-serif;
    padding:10px;
}
</style>