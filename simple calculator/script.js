function calculate() {
    let operator = document.getElementById('operator').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;

        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;

        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = " cannot Divide by Zero !";
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById('result').innerHTML = "Result : " + result.toFixed(3);

}