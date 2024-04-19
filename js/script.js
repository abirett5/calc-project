const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submit');
const displayResult = document.getElementById('displayResult');

submitBtn.addEventListener("click", displayFunc);

function displayFunc() {
    displayResult.innerHTML = 'Hey ' + textInput.value + ', The computer Choose ' + name;
};

let names = ['Rock', 'Paper', 'Scissor'];
let name = names[Math.floor(Math.random()*names.length)];
// alert('The computer chose:' + name);

// displayResult.innerHTML = 'The computer Choose ' + name;