function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function updateDisplay(number) {
  let display = document.querySelector("#displayNumbers");
  let displayText = display.textContent;

  number = this.textContent;
  console.log(number);
}

let buttons = document.querySelector("#numPad");

buttons.addEventListener("click", (event) => {
  updateDisplay();
});

function operate(coefficient1, coefficient2, operator) {
  return;
}
