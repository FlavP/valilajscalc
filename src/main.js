
var form = Form.publicApi();
var parent = document.getElementById("app");
var buttonsContainer = createDiv("buttons-container");
var buttonDiv = createDiv("btn");
parent.appendChild(form);

button = Button.publicApi(5);
var calc = Calculator.publicApi(0);
console.log(calc);
button.addEventListener("click", function () {
    form[0].value = calc.getInput(this.value);
});
buttonDiv.appendChild(button);
buttonsContainer.appendChild(buttonDiv);
parent.appendChild(buttonDiv);

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return div;
}



