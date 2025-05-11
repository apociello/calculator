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

function moreThan3Decimals(num) {
  return num % 1 !== 0 && num.toString().split(".")[1]?.length > 3;
}

function numberFormat(num) {
    const str = num.toString();

    if (num < 100000000000 && moreThan3Decimals(num)) {
        return Number(num.toFixed(3))
    } else if (num < 999999999999.99 && str.length > 15){
        return str.slice(0,15);
    } else if (str.length <= 15) {
        return str;
    } else {
        return Number(num).toExponential(8).slice(0, 15);
    }
}

let n1 = 0;
let n2;
let operator;
let finalResult = false;

let display = document.querySelector('#display');

const clean = document.querySelector('#clean');
clean.addEventListener('click', () => {
    n1 = 0;
    n2 = undefined;
    operator = undefined;
    display.textContent = ''
});

const deleteLast = document.querySelector('#delete');
deleteLast.addEventListener('click', () => {
    if (n2 !==undefined) {
        n2 = Number(n2.toString().slice(0,-1))
    }
    display.textContent = display.textContent.slice(0,-1)
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (operator == undefined && n2 == undefined) {
        return 
    }

    if (operator == '/' && n2 == 0){
        display.textContent = 'ERROR'
        n1 = 0;
        operator = undefined;
        n2 = undefined;
        finalResult = true;
        return
    }
    let result = operate(Number(n1), operator, Number(n2))
    result = numberFormat(result)
    display.textContent = result;
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
            let result = operate(Number(n1), operator, Number(n2));
            result = numberFormat(result)
            display.textContent = result;
            n1 = result;
            operator = button.textContent;
            n2 = undefined;
            finalResult = true;
        }
        finalResult = false;
        n1 = display.textContent;
        operator = button.textContent;
        return
    } else if (operator !== undefined && n2 == undefined) {
        n2 = button.textContent;
        display.textContent = n2;
        return
    } else if (n2 !== undefined) {
        n2 += button.textContent;
    }

    if (finalResult) {
        display.textContent = button.textContent;
        finalResult = false;
        return finalResult
    } else if (display.textContent.length < 15) {
        display.textContent += button.textContent;
    }
    
}))