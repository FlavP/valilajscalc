var OperationService = (function () {
    var getResult = function(operand, operator, value){
        operand = Number(operand);
        value = Number(value);
        switch (operator) {
            case '+':
                return operand + value;
            case '-':
                return operand - value;
            case '*':
                return operand * value;
            case '/':
                return operand / value;
            default :
                return operand;
        }
    };

    return {
        publicApi : getResult
    };
})();