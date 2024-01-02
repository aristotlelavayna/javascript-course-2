console.log('hello');

let titleDiv = document.getElementById('title')
console.log(title);

console.log('before: ', title.innerHTML);
title.innerText = 'goodbye'
console.log('after: ',title.innerText);

let message = 'goodbye my lover'
titleDiv.innerHTML = `'<p>${message}</p>'`

titleDiv.style.color = 'red'

////////////////
let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// regular function format
/* redDiv.onclick = function () {
    console.log('red');
} */

redDiv.onclick = () => console.log('you clicked red');
yellowDiv.onclick = () => console.log('you clicked yellow');
greenDiv.onclick = () => console.log('you clicked green');



// forEach loop
const squares = document.querySelectorAll('.colorSquare')
squares.forEach(square => console.log(square.value));

squares.forEach(square => {
    square.onclick = () => console.log(square.value);
});
