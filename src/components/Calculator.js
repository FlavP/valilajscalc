var Calculator = (function () {
    var getInput = function(value){
        var operand;
        if (isNaN(value) && value !== '=')
            operand = value;
        else if (!isNaN(value) && value)
            value += value;
        return value;
    };

    return {
       publicApi : getInput
    };
})();
