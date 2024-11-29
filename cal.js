let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function operation(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
