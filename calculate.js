let currentInput = '';
let display = document.getElementById('display');


function appendInput(value) {
    currentInput += value;
    display.innerHTML = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerHTML = '0';
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerHTML = currentInput === '' ? '0' : currentInput;
}
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerHTML = currentInput;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
