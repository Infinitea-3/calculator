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

//Grab Number When Clicked, Concats Onto Existing Number
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

let displayValue = [""];

numbers.forEach(button=>{
    button.addEventListener('click', function(){
        if(displayValue.length == 0){
            number = button.textContent;
            displayValue.push(number);
        }
        else{
        number = displayValue.at(-1) + button.textContent;
        displayValue = displayValue.slice(0,-1);
        displayValue.push(number);
        }
        display.textContent = displayValue.at(-1);
    });
});

//Grab Operator When Clicked
const operators = document.querySelectorAll('.operator');
let operatorValue = [];

operators.forEach(button=>{
    button.addEventListener('click', function(){
        if(displayValue.at(-2)=="+" || displayValue.at(-2)=="-" || displayValue.at(-2)=="*" || displayValue.at(-2)=="/"){
            displayValue = displayValue.slice(0,-2);
        }
        displayValue.push((button.textContent));
        display.textContent = displayValue.at(-1);
        displayValue.push("");
    });
});

//Run 'Operate' When Equal Sign Is Pressed (No Exception Handling Currently)
const equalSign = document.querySelector('.equalSign');
equalSign.addEventListener('click',function(){
    console.log(displayValue);
    displayValue.push(operate(Number(displayValue.at(-3)), Number(displayValue.at(-1)), displayValue.at(-2)));
    display.textContent = displayValue.at(-1);
});

//Flip Sign When +/- Button Pressed
const plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click',function(){
    newValue = displayValue.at(-1) * -1;
    displayValue[displayValue.length - 1] = newValue;
    display.textContent = displayValue.at(-1);
});

//Delete Last 
const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click',function(){
        if(Number(displayValue.at(-1)) % 1 == 0){
            string = displayValue.at(-1);
            newString = string.substring(0,string.length-1);
            displayValue = displayValue.slice(0,-1);
            displayValue.push(newString);
        }
    display.textContent = displayValue.at(-1);
    });

//Clear Arrays When AC Is Pressed
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click',function(){
    displayValue = [""];
    display.textContent = 0
});

