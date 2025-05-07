function add(n1, n2) {
    return n1 + n2;
} 

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2; 
}

function operate(n1, operator, n2) {

    switch(operator) {
        case "+":
            return add(n1, n2)
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
    }
}

let display = document.querySelector('.display');
const clean = document.querySelector('#clean');
clean.addEventListener('click', () => display.textContent = '');
const deleteLast = document.querySelector('#delete');
deleteLast.addEventListener('click', () => display.textContent = display.textContent.slice(0,-1));


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => button.addEventListener('click', () => {
    if (button.textContent == 'CLEAR' || button.textContent == 'DELETE' || button.textContent == '=') {
        return
    }
    display.textContent += button.textContent
}))


