const userInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const form = document.getElementById('search-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(userInput.value);
});