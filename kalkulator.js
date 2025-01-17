console.log("Selamat Datang di kalkulator Apop")
alert("Hello Smart People!")

const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   secondNumber: false
};
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.secondNumber = false;
}
function inputDigit(digit) {
   if (calculator.secondNumber && calculator.firstNumber === calculator.displayNumber) {
       calculator.displayNumber = digit;
   } else {
       if (calculator.displayNumber === '0') {
           calculator.displayNumber = digit;
       } else {
           calculator.displayNumber += digit;
       }
   }
}
 function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}
 function handleOperator(operator) {
   if (!calculator.secondNumber) {
    calculator.operator = operator;
    calculator.secondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

   } else {
       alert('Operator sudah ditetapkan')
   }
}
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('operator')) {
           handleOperator(target.innerText)
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}
function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
   }
   

   calculator.displayNumber = result;
} 