//Four Basic Calculator Functions
let addNumbers = (a,b) => a + b;
let subtractNumbers = (a,b) => a - b;
let multiplyNumbers = (a,b) => a * b;
let divideNumbers = (a,b) => a / b;

//Actual Calculation Step
let operate = function(a,b,operator){
    if(operator === "+"){
        return addNumbers(a,b);
    }
    else if (operator === "-"){
        return subtractNumbers(a,b);
    }
    else if (operator === "*"){
        return multiplyNumbers(a,b);
    }
    else if (operator === "/"){
        if(b === 0){
            return "ERROR";
        }
        else{
            return divideNumbers(a,b);
        }
    }
};

//Grab Numbers/Operators When Clicked
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

let displayValue = [0];
numbers.forEach(button=>{
    button.addEventListener('click', function(){
        displayValue.push(Number(button.textContent));
        display.textContent = displayValue.at(-1);
    });
});

const operators = document.querySelectorAll('.operator');
let operatorValue = [];

operators.forEach(button=>{
    button.addEventListener('click', function(){
        display.textContent = button.textContent;
        operatorValue.push(button.textContent);
    });
});

//Flip Sign When +/- Button Pressed
const plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click',function(){
    newValue = displayValue.at(-1) * -1;
    displayValue[displayValue.length - 1] = newValue;
    display.textContent = displayValue.at(-1);
});

//Clear Arrays When AC Is Pressed
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click',function(){
    displayValue = [0];
    operatorValue = [];
    display.textContent = 0
});

//Run 'Operate' When Equal Sign Is Pressed (No Exception Handling Currently)
const equalSign = document.querySelector('.equalSign');
equalSign.addEventListener('click',function(){
    displayValue.push(operate(displayValue.at(-2), displayValue.at(-1), operatorValue.at(-1)));
    display.textContent = displayValue.at(-1);
});