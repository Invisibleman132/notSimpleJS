class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
        this.previousOperation= "";
    }
    clear(){
        this.currentOperation = "0";
        this.previousOperation = "";
        this.opperation = undefined;
    }

    delete(){
        if(this.currentOperation.length == 1 || !isFinite(this.currentOperation) || this.currentOperation == 0){
        this.currentOperation = "0";
        }
        else{
        this.currentOperation = this.currentOperation.toString().slice(0,-1);
        }
    }

    appendNumber(number){
        if(number === '.' && this.currentOperation.includes('.')) return;
        else if(this.currentOperation == "0")
        this.currentOperation = this.currentOperation.toString().slice(0,0);
        this.currentOperation = this.currentOperation.toString() + number.toString();
    }
    chooseOperation(operation){
        if(this.currentOperation === '') return
        if(this.previousOperation !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperation = this.currentOperation + this.operation;
        this.currentOperation = "";
    }

    compute(){
let result;
const prev = parseFloat(this.previousOperation);
const current = parseFloat(this.currentOperation);
if(isNaN(prev) || isNaN(current)) return
switch(this.operation){
    case '+':{
        result = prev + current;
        break;
    }
    case '×':{
        result = prev * current;
        break;
    }
    case '−':{
        result = prev - current;
        break;
    }
    case '÷':{
        result = prev / current;
        break;
    }
    default: return
}
this.currentOperation = result;
this.operation = undefined;
this.previousOperation = "";
    }

    updateDisplay(){
        this.currentOperationText.innerText = this.currentOperation;
        this.previousOperationText.innerText = this.previousOperation;
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-deleteLast]');
const clearButton = document.querySelector('[data-clear]');
const previousOperationText = document.querySelector('[data-previousOperation]');
const currentOperationText = document.querySelector('[data-currentOperation]');

const calculator = new Calculator(previousOperationText, currentOperationText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})

