// 1. Elements select karo (yeh already theek hai)
const display     = document.querySelector('#main-result');
const subDisplay  = document.querySelector('#subhistory');
const numberBtns  = document.querySelectorAll('.btn-number');
const clearBtn    = document.querySelector('#allclear');

// 2. Important variables
let currentNumber = "0";

// 3. Display update function (bohot useful rahega)
function updateDisplay() {
    display.textContent = currentNumber || "0";   // kabhi empty na ho jaye
}

// 4. Number buttons ka logic (sabse zaroori hissa)
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent.trim();   // "7", ".", "00" etc.

        // ----------------- yahan se asli logic shuru -----------------

        // Case 1: decimal point (. )
        if (value === ".") {
            if (currentNumber.includes(".")) {
                return; // pehle se decimal hai → ignore kar do
            }
            // agar currentNumber "0" hai to "0." ban jaye
            currentNumber = currentNumber === "0" ? "0." : currentNumber + ".";
        }

        // Case 2: 00 button
        else if (value === "00") {
            if (currentNumber !== "0") {
                currentNumber += "00";
            }
            // agar sirf 0 hai to "00" mat daalo, sirf "0" rakho
        }

        // Case 3: normal number (0-9)
        else {
            // agar abhi "0" hai aur value "." nahi hai to replace kar do
            if (currentNumber === "0") {
                currentNumber = value;
            } else {
                currentNumber += value;
            }
        }

        // har click ke baad screen update
        updateDisplay();
    });
});

// 5. All Clear (AC) button
clearBtn.addEventListener('click', () => {
    currentNumber = "0";
    // agar subhistory bhi clear karna hai to yeh line add kar dena
    // subDisplay.textContent = "";
    updateDisplay();
});

// 6. Page load hone pe pehli baar display set kar do
updateDisplay();