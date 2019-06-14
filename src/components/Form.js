var Form = (function () {
    var createForm = function () {
        const form = document.createElement("form");
        const input = document.createElement("input");
        form.id = "calc";
        form.action = "#";
        input.name = "display";
        input.id = "display";
        input.value = 0;
        input.readOnly = true;
        form.appendChild(input);
        return form;
    };

    return {
        publicApi : createForm
    }
})();
