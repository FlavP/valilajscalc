var Calculator = (function () {
    var getInput = function(input, value){
        var operand;
        if (isNaN(value) && value !== '=')
            operand = value;
        else if(input == 0)
            return value;
        else if (!isNaN(value)){
            value = input + value;
            return value;
        }
    };

    return {
       publicApi : getInput
    };
})();
