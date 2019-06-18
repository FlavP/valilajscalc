var form = FormComponent.publicApi();
var parent = document.getElementById("app");
var digitsContainer = createDiv("digits-container");
var operationsContainer = createDiv("operations-container");
parent.appendChild(form);

var calcState = {
    result: '',
    previousResult: 0,
    previousOperand: '',
    currentButtonValue: '',
    hasReset : false
};

var buttonHandler = function () {

    if (this.value === 'ce') {
        calcState.result = 0;
        calcState.previousResult = 0;
        calcState.currentButtonValue = '';
        calcState.previousOperand = '';
    } else if (this.value === '=') {
        if (calcState.previousOperand && !isNaN(calcState.result))
            calcState.previousResult = OperationService.publicApi(calcState.previousResult, calcState.previousOperand, calcState.result);
        if (calcState.previousResult > 0)
            calcState.result = calcState.previousResult;
        else
            calcState.result = 0;
        calcState.previousResult = 0;
        calcState.previousOperand = calcState.currentButtonValue;
        calcState.currentButtonValue = '=';
        calcState.hasReset = true;
    } else if (!isNaN(this.value)) {
        if (calcState.currentButtonValue && isNaN(calcState.currentButtonValue))
            calcState.previousOperand = calcState.currentButtonValue;
        calcState.currentButtonValue = this.value;
        if (!calcState.result || isNaN(calcState.result) || calcState.hasReset){
            calcState.result = DisplayService.publicApi(0, this.value);
            calcState.hasReset = false;
        }
        else
            calcState.result = DisplayService.publicApi(calcState.result, this.value);
    } else {
        if (calcState.result && calcState.previousResult === 0)
            calcState.previousResult = calcState.result;
        if (calcState.previousOperand && !isNaN(calcState.result))
            calcState.previousResult = OperationService.publicApi(calcState.previousResult, calcState.previousOperand, calcState.result);
        calcState.currentButtonValue = this.value;
        calcState.result = calcState.currentButtonValue;
    }

    form[0].value = calcState.result;
};

var digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '=', 'ce'];

for (let i = 0; i < digits.length; i++){
    var button = ButtonComponent.publicApi(digits[i]);
    button.addEventListener("click", buttonHandler);
    digitsContainer.appendChild(button);
}

var operations = ['+', '-', '*', '/'];

for (let i = 0; i < operations.length; i++){
    var button = ButtonComponent.publicApi(operations[i]);
    button.addEventListener("click", buttonHandler);
    operationsContainer.appendChild(button);
}

parent.appendChild(digitsContainer);
parent.appendChild(operationsContainer);

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return div;
}



