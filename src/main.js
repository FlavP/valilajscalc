
var form = FormComponent.publicApi();
var parent = document.getElementById("app");
var buttonsContainer = createDiv("buttons-container");
var buttonDiv = createDiv("btn");
parent.appendChild(form);

var button = ButtonComponent.publicApi(5);
var previousResult = 0;
var previousOperand;
var currentButtonValue;

var buttonHandler = function () {
    var result;

    if (button.value === 'ce'){
        result = 0;
        previousResult = 0;
        currentButtonValue = '';
        previousOperand = '';
    }

    if (button.value === '='){
        if (previousResult > 0)
            result = previousResult;
        previousResult = 0;
        previousOperand = '';
        currentButtonValue = '';
    }

    if (!isNaN(button.value)){
        if (currentButtonValue && isNaN(currentButtonValue))
            previousOperand = currentButtonValue;
        currentButtonValue = button.value;
        result = DisplayService.publicApi(form[0].value, button.value);
    }

    else {
        if (previousOperand && !isNaN(result)){
            previousResult = OperationService.publicApi(previousResult, previousOperand, result);
        }

        currentButtonValue = button.value;
        result = currentButtonValue;
    }

    form[0].value = result;
};

button.addEventListener("click", buttonHandler);
buttonDiv.appendChild(button);
buttonsContainer.appendChild(buttonDiv);
parent.appendChild(buttonDiv);

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return div;
}



