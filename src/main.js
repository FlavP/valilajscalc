
var form = FormComponent.publicApi();
var parent = document.getElementById("app");
var buttonsContainer = createDiv("buttons-container");
var buttonDiv = createDiv("btn");
parent.appendChild(form);

var button5 = ButtonComponent.publicApi(5);
var buttonPlus = ButtonComponent.publicApi('+');
var buttonEqual = ButtonComponent.publicApi('=');
var buttonce = ButtonComponent.publicApi('ce');



var calcState = {
    result              : '',
    previousResult      : 0,
    previousOperand     : '',
    currentButtonValue  : ''
};


var buttonHandler = function () {
    if (this.value === 'ce'){
        calcState.result = 0;
        calcState.previousResult = 0;
        calcState.currentButtonValue = '';
        calcState.previousOperand = '';
    }

    else if (this.value === '='){
        if (calcState.previousResult > 0)
            calcState.result = calcState.previousResult;
        calcState.previousResult = 0;
        calcState.previousOperand = '';
        calcState.currentButtonValue = '';
    }

    else if (!isNaN(this.value)){
        if (calcState.currentButtonValue && isNaN(calcState.currentButtonValue))
            calcState.previousOperand = calcState.currentButtonValue;
        calcState.currentButtonValue = this.value;
        if (!calcState.result || isNaN(calcState.result))
            calcState.result = DisplayService.publicApi(0, this.value);
        else
            calcState.result = DisplayService.publicApi(calcState.result, this.value);

    }

    else {
        if (calcState.previousOperand && !isNaN(calcState.result)){
            calcState.previousResult = OperationService.publicApi(calcState.previousResult, calcState.previousOperand, calcState.result);
        }
        console.log(calcState.previousResult);
        calcState.currentButtonValue = this.value;
        calcState.result = calcState.currentButtonValue;
    }

    form[0].value = calcState.result;
};

button5.addEventListener("click", buttonHandler);
buttonPlus.addEventListener("click", buttonHandler);
buttonEqual.addEventListener("click", buttonHandler);
buttonce.addEventListener("click", buttonHandler);

buttonDiv.appendChild(button5);
buttonDiv.appendChild(buttonPlus);
buttonDiv.appendChild(buttonEqual);
buttonDiv.appendChild(buttonce);
buttonsContainer.appendChild(buttonDiv);
parent.appendChild(buttonDiv);

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return div;
}



