var DisplayService = (function () {
    var getInput = function(input, value){
        if (value === ".")
            if (String(input).includes('.'))
                String(input).replace('.', '');
            else
                input += '.';
        else if(input == 0)
            input = value;
        else if (!isNaN(value)){
            if (validInput(input + value))
                input += value;
        }
        return input;
    };
    
    var validInput = function (input) {
        return (String(input).
            replace('-', '').
            replace('.', '').
            length < 9);
    };

    return {
       publicApi : getInput
    };
})();
