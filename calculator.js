//A simple calculator with javascript to make it life

//Function for Addition
function add(number1, number2) {
    return number1 + number2;
}
//An event that calls the add button function
document.getElementById('add').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//Function for subtraction
function subtract(number1, number2) {
    return number1 - number2;
}
//An event that calls the subtract button function
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//Function for multiplication
function multiply(number1, number2) {
    return number1 * number2;
}
//An event that calls the multiply button function
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//Function for division
function divide(number1, number2) {
    return number1 / number2;
}
//An event that calls the multiply button function
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});