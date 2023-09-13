//Four Basic Calculator Functions
let addNumbers = (a,b) => a + b;
let subtractNumbers = (a,b) => a - b;
let multiplyNumbers = (a,b) => a * b;
let divideNumbers = (a,b) => a / b;

//Actual Calculation Step
let operate = function(a,b,operator){
    if(operator === "+"){
        addNumbers(a,b);
    }
    else if (operator === "-"){
        subtractNumbers(a,b);
    }
    else if (operator === "*"){
        multiplyNumbers(a,b);
    }
    else if (operator === "/"){
        divideNumbers(a,b);
    }
}
