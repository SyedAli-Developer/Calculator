// Display result on Elements
const result = document.getElementById('result');
const subhistory = document.getElementById('subhistory');
/*------------------------------------*/
result.textContent = '0';
subhistory.textContent = '';

// numbers 
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('zero');
const doubleZero = document.getElementById('double-zero');
const dot = document.getElementById('dot');

// operators
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const percent = document.getElementById('percent');

// Clear buttons

let remove = document.getElementById('remove');
let allclear = document.getElementById('allclear');

//Functions
function WriteNumber(number) {
    if(result.textContent.includes('.') && number === '.') {
        return;
    }
    else if (result.textContent === '0' && number === '.') {
        result.textContent = '0.';
    }
    else if(number === '00' && result.textContent === '0') {
        result.textContent = '0';
    }
    else if (result.textContent === '0' && number === '0') {
        return;
    }
    else if (result.textContent === '0' && number !== '0') {
        result.textContent = number;
    }
    else {
        result.textContent += number;
    }
}
function ClearAll() {
    result.textContent = '0';
    subhistory.textContent = '';
}
function removeLast(){
    if (result.textContent.length > 1) {
        result.textContent= result.textContent.slice(0, -1); 
    }
    else if (result.textContent.length === 1) {
        result.textContent = '0';
    }
}
// Event Listeners 
num1.addEventListener('click', () => WriteNumber('1'));
num2.addEventListener('click', () => WriteNumber('2'));
num3.addEventListener('click', () => WriteNumber('3'));
num4.addEventListener('click', () => WriteNumber('4'));
num5.addEventListener('click', () => WriteNumber('5'));
num6.addEventListener('click', () => WriteNumber('6'));
num7.addEventListener('click', () => WriteNumber('7'));
num8.addEventListener('click', () => WriteNumber('8'));
num9.addEventListener('click', () => WriteNumber('9'));
num0.addEventListener('click', () => WriteNumber('0'));
doubleZero.addEventListener('click', () => WriteNumber('00'));
dot.addEventListener('click', () => WriteNumber('.'));

allclear.addEventListener('click', ClearAll);
remove.addEventListener('click', removeLast);