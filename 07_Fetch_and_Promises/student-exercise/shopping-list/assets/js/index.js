let loadingList = document.querySelector('.loadingButton');
const container = document.querySelector('.shopping-list ul');

document.addEventListener('DOMContentLoaded', () => {
loadingList.addEventListener('click', (event) => {
    event.preventDefault();
    
    fetch("./assets/data/shopping-list.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        groceryList = data;
        createGroceryList(groceryList); 
    })
    .catch((err) => console.log(err));

})
})


function createGroceryList(list){
    if('content' in document.createElement('template')) {
        
        list.forEach((item) => {

    const groceryTemplate = document.getElementById('shopping-list-item-template').content.cloneNode(true);
    const newItem = groceryTemplate.querySelector('li')
    spanItem = document.createElement('span')
    spanItem.innerText = item.name
    newItem.appendChild(spanItem)
    if(item.completed){
        groceryTemplate.querySelector('i').classList.add('completed')
    }
    container.appendChild(groceryTemplate)

}); 
} else {
    console.error('Your browser does not support templates')

}
}