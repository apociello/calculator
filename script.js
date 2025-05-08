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

let n1 = 0;
let n2;
let operator;
let finalResult = false;

let display = document.querySelector('.display');

const clean = document.querySelector('#clean');
clean.addEventListener('click', () => {
    n1 = 0;
    n2 = undefined;
    operator = undefined;
    display.textContent = ''
    return n1, n2, operator;
});

const deleteLast = document.querySelector('#delete');
deleteLast.addEventListener('click', () => display.textContent = display.textContent.slice(0,-1));

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    const result = display.textContent = operate(Number(n1), operator, Number(n2));
    result;
    n1 = result;
    operator = undefined;
    n2 = undefined;
    finalResult = true;
})


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => button.addEventListener('click', () => {
    if (button.textContent == 'CLEAR' || button.textContent == 'DELETE' || button.textContent == '=') {
        return
    }

    if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/') {
        if (operator !== undefined && n2 !== undefined) {
            const result = display.textContent = operate(Number(n1), operator, Number(n2));
            result;
            n1 = result;
            operator = button.textContent;
            n2 = undefined;
            finalResult = true;
        }
        finalResult = false;
        n1 = display.textContent;
        operator = button.textContent;
        return n1, operator
    } else if (operator !== undefined && n2 == undefined) {
        n2 = button.textContent;
        display.textContent = n2;
        return n2;
    } else if (n2 !== undefined) {
        n2 += button.textContent;
    }

    if (finalResult) {
        display.textContent = button.textContent;
        finalResult = false;
        return finalResult
    } else {
        display.textContent += button.textContent;
    }
    
}))