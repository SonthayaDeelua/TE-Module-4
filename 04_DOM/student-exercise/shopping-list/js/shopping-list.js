// add pageTitle
const pageTitle = 'My Shopping List'; 
// add groceries
const groceries = [
  { id: 1, name: 'coke', completed: false },
  { id: 2, name: 'water', completed: false },
  { id: 3, name: 'banana', completed: false },
  { id: 4, name: 'orange', completed: false },
  { id: 5, name: 'milk', completed: false },
  { id: 6, name: 'pineapple', completed: false},
  { id: 7, name: 'ketchup', completed: false },
  { id: 8, name: 'chicken', completed: false },
  { id: 9, name: 'salt', completed: false },
  { id: 10, name: 'apple', completed: false }
]
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const heading = document.getElementById('title')
  heading.innerText = pageTitle;
  
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
  });
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.classList.add('completed');
  });
}


setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});