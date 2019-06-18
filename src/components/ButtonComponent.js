var ButtonComponent = (function () {
    var makeButton = function (buttonValue) {
        const button = document.createElement("button");
        button.id = buttonValue;
        button.value = buttonValue;
        button.textContent = buttonValue;
        button.classList.add('btn');
        return button;
    };
    return {
        publicApi : makeButton
    }
})();