
var form = Form.publicApi();
var parent = document.getElementById("app");
var buttonsContainer = createDiv("buttons-container");
var buttonDiv = createDiv("btn");
parent.appendChild(form);

button = Button.publicApi(5);

button.addEventListener("click", function () {
    var calc = Calculator.publicApi(form[0].value, button.value);
    form[0].value = calc;
});
buttonDiv.appendChild(button);
buttonsContainer.appendChild(buttonDiv);
parent.appendChild(buttonDiv);

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return div;
}



