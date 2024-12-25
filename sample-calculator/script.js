let currentExpression="";

function appendNumber(number){
    currentExpression +=number;
    document.getElementById('result').value= currentExpression
   // alert(numberSelect)
}
function appendOperator(operator){
    currentExpression += operator;
    document.getElementById('result').value= currentExpression
}
// function calculateResult() {
//     try {
//         // Replace operators with JS-compatible ones
//         let sanitizedExpression = currentExpression.replace('÷', '/').replace('×', '*');

//         // Use Function constructor for safer evaluation (compared to eval)
//         let result = Function(`'use strict'; return (${sanitizedExpression})`)();

//         // Display the result
//         document.getElementById('result').value = result;
//     } catch {
//         // Display an error message if something goes wrong
//         document.getElementById('result').value = 'Error';
//     }
// }

function calculateResult() {
    try {
        // Replace operators with math.js-compatible ones
        let sanitizedExpression = currentExpression.replace('÷', '/').replace('×', '*');
        let result = math.evaluate(sanitizedExpression);

        // Display the result
        document.getElementById('result').value = result;
    } catch {
        // Display an error message if something goes wrong
        document.getElementById('result').value = 'Error';
    }
}
function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}