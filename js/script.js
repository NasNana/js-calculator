// Define numbers
let number1 = document.getElementById("number_one");
let number2= document.getElementById("number_two");

// Define basic operators
let buttonPlus = document.getElementById("operator_plus");
let buttonMinus = document.getElementById("operator_minus");
let buttonDivide = document.getElementById("operator_divide");
let buttonMultiply = document.getElementById("operator_multiply");


let buttons = document.querySelectorAll('.operation_button');

function getNumber1 (){
    return Number(number1.value)
}
function getNumber2 (){
    return Number(number2.value)
}

function makeOperation(operationCode){
    if(operationCode === '+' ){
        console.log(getNumber1() + getNumber2());
    } else if(operationCode === '-'){
        console.log(getNumber1() - getNumber2());
    }else if(operationCode === '/'){
        console.log(getNumber1() / getNumber2());
    }else if(operationCode === '*'){
        console.log(getNumber1() * getNumber2());
    } return 'There is no operation for you'
}
function onButtonClick(eventObject){
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerText;
    makeOperation(operation);
}

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', onButtonClick);
}

