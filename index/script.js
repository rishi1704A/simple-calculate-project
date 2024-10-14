
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Variables to store calculation values
let currentInput = '';
let operator = '';
let previousInput = '';

// Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            // All Clear button logic
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (buttonText === '=') {
            // Equal button logic for calculation
            performCalculation();
        } else if (buttonText === 'x²') {
            // Square logic
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
            display.value = currentInput;
        } else if (['+', '-', '*', '/', '%'].includes(buttonText)) {
            // Operator logic
            operator = buttonText;
            previousInput = currentInput;
            currentInput = '';
        } else {
            // Append numbers or decimal points
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});

// Function to perform the calculation
function performCalculation() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    // Display the result and reset variables
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    display.value = currentInput;
}
