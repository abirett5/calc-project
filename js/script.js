const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submit');
const displayResult = document.getElementById('displayResult');

submitBtn.addEventListener("click", displayFunc);

function displayFunc() {
	let inputValue = textInput.value;
	let names = ['Rock', 'Paper', 'Scissor'];
	let name = names[Math.floor(Math.random()*names.length)];
	
    if (inputValue == null || inputValue == '') {
        alert('Please type your name first!');
    } else {
        displayResult.innerHTML = 'Hey ' + textInput.value + ', The computer Choose ' + name;
    };
    // displayResult.innerHTML = 'Hey ' + textInput.value + ', The computer Choose ' + name;
};


// alert('The computer chose:' + name);

// displayResult.innerHTML = 'The computer Choose ' + name;