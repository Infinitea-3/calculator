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
    else if (operator == "-"){
        return subtractNumbers(a,b);
    }
    else if (operator === "*"){
        return multiplyNumbers(a,b);
    }
    else if (operator === "/"){
        return divideNumbers(a,b);
    }
};

const display = document.querySelector('.display');
let displayValue = 0
const numbers = document.querySelectorAll('.number');

numbers.forEach(button=>{
    button.addEventListener('click', function(){
        display.textContent = button.textContent;
        displayValue = button.textContent;
    });
});