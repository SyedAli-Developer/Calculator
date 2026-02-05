// Display result on Elements
const result = document.getElementById('result');
const subhistory = document.getElementById('subhistory');
/*------------------------------------*/
result.textContent = '0';
subhistory.textContent = '';

// numbers 
const num = document.querySelectorAll('.number-btn');
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
const equals = document.getElementById('equals');
const modulus = document.getElementById('modulus');

// Clear buttons

let remove = document.getElementById('remove');
let allclear = document.getElementById('allclear');

//Functions
function WriteNumber(number) {
    if (result.textContent.includes('.') && number === '.') {
        return;
    }
    else if (result.textContent === '0' && number === '.') {
        result.textContent = '0.';
    }
    else if (number === '00' && result.textContent === '0') {
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
function removeLast() {
    if (result.textContent.length > 1) {
        result.textContent = result.textContent.slice(0, -1);
    }
    else if (result.textContent.length === 1) {
        result.textContent = '0';
    }
} function AddOperator(operator) {
    const currentContent = result.textContent;
    const lastChar = currentContent.slice(-1);
    const operators = ['+', '-', 'X', '/'];

    // 1. Agar screen "0" hai aur "-" dabaya, to usay negative sign bana do
    if (currentContent === "0" && operator === "-") {
        result.textContent = "-";
        return;
    }

    // Extra Check: Agar screen khali ya "0" hai aur koi aur operator dabaya, to return
    if ((currentContent === "" || currentContent === "0") && operator !== "-") return;

    // 2. Agar aakhri character pehle se operator hai, to swap/replace karo
    if (operators.includes(lastChar)) {
        result.textContent = currentContent.slice(0, -1) + operator;
        return;
    }

    // 3. FIX: Pehle character ke BAAD check karo ke koi operator hai ya nahi
    // Hum slice(1) use karenge taake shuru wala "-" ignore ho jaye
    const contentAfterFirstChar = currentContent.slice(1);
    const hasOperator = operators.some(op => contentAfterFirstChar.includes(op));

    if (hasOperator) {
        console.log("Ek calculation pehle se jari hai");
        return;
    } else {
        // 4. Agar koi operator nahi mila (ya sirf shuru mein minus hai), to add kar do
        result.textContent += operator;
    }
}

function Calc(fnum, opSymbol, snum) {

    console.log(`Calculating: ${fnum} ${opSymbol} ${snum}`);
    if (opSymbol === '+') {
        return fnum + snum;
    }
    else if (opSymbol === '-') {
        return fnum - snum;
    }
    else if (opSymbol === 'X') {
        return fnum * snum;
    }
    else if (opSymbol === '/') {
        return fnum / snum;
    }
    else if (opSymbol === '%') {
        return fnum % snum;
    }
    else {
        console.log('Invalid operator');
        return null;
    }
}
function Splitor(question) {
    let arrayOfNumbers = [];
    let firstnum = [];
    let secondnum = [];
    if (question.includes('+')) {
        const operator = '+';
        arrayOfNumbers.push(question.split(operator));
        firstnum.push(arrayOfNumbers[0][0]);
        secondnum.push(arrayOfNumbers[0][1]);
        arrayOfNumbers.length = 0; // clear array

        console.log(`This is the Question: ${question}`);
        console.log(`Numbers are: ${firstnum} and ${secondnum}`);
        console.log(`firstnumber: ${firstnum}`);
        console.log(`operator: ${operator}`);
        console.log(`secondnumber: ${secondnum}`);
    }
    else if (question.includes('-')) {
        const operator = '-';
        arrayOfNumbers.push(question.split(operator));
        firstnum.push(arrayOfNumbers[0][0]);
        secondnum.push(arrayOfNumbers[0][1]);
        arrayOfNumbers.length = 0; // clear array

        console.log(`This is the Question: ${question}`);
        console.log(`Numbers are: ${firstnum} and ${secondnum}`);
        console.log(`firstnumber: ${firstnum}`);
        console.log(`operator: ${operator}`);
        console.log(`secondnumber: ${secondnum}`);
    }
    else if (question.includes('X')) {
        const operator = 'X';
                arrayOfNumbers.push(question.split(operator));
        firstnum.push(arrayOfNumbers[0][0]);
        secondnum.push(arrayOfNumbers[0][1]);
        arrayOfNumbers.length = 0; // clear array

        console.log(`This is the Question: ${question}`);
        console.log(`Numbers are: ${firstnum} and ${secondnum}`);
        console.log(`firstnumber: ${firstnum}`);
        console.log(`operator: ${operator}`);
        console.log(`secondnumber: ${secondnum}`);
    }
    else if (question.includes('/')) {
        const operator = '/';
                arrayOfNumbers.push(question.split(operator));
        firstnum.push(arrayOfNumbers[0][0]);
        secondnum.push(arrayOfNumbers[0][1]);
        arrayOfNumbers.length = 0; // clear array

        console.log(`This is the Question: ${question}`);
        console.log(`Numbers are: ${firstnum} and ${secondnum}`);
        console.log(`firstnumber: ${firstnum}`);
        console.log(`operator: ${operator}`);
        console.log(`secondnumber: ${secondnum}`);
    }
    Calc(Number(firstnum), operator, Number(secondnum));
}
// Event Listeners 
document.querySelectorAll('.number-btn').forEach(button => {
    button.addEventListener('click', () => WriteNumber(button.innerText));
});

allclear.addEventListener('click', ClearAll);
remove.addEventListener('click', removeLast);

plus.addEventListener('click', () => AddOperator('+'));
minus.addEventListener('click', () => AddOperator('-'));
multiply.addEventListener('click', () => AddOperator('X'));
divide.addEventListener('click', () => AddOperator('/'));
modulus.addEventListener('click', () => AddOperator('%'));

equals.addEventListener('click', () => Splitor(result.textContent)); // just for testing

