
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

             /* RED YELLOW GREEN GAME*/
// forEach loop
const squares = document.querySelectorAll('.colorSquare')
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}

squares.forEach(square => console.log(square.value));

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
});

function clearScores() {
    timesClicked.red = 0;
    timesClicked.yellow = 0;
    timesClicked.green = 0;
    squares.forEach(square => {
        square.innerText = 0
    })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()