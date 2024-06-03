console.log("Link successful");
const elements = document.querySelectorAll("#numbers");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#displayNumbers");
const clearBtn = document.querySelector("#clearBtn");
const addBtn = document.querySelector("#addBtn");
const equalBtn = document.querySelector("#equalBtn");
let selectedOperator = "";
let numberValue = [];
let secondNumberValue = [];
let firstValue = 0;
let secondValue = 0;
let result = 0;

function updateDisplay(value = 0) {
  display.textContent = value;
}

/// listen to number buttons inputs ///
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    if (selectedOperator === "") {
      numberValue.push(this.value);
      firstValue = parseInt(numberValue.join(""));
      updateDisplay(firstValue);
    } else if (selectedOperator !== "") {
      secondNumberValue.push(this.value);
      secondValue = parseInt(secondNumberValue.join(""));
      updateDisplay(secondValue);
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (selectedOperator === "") {
      selectedOperator = this.value;
    } else {
      firstValue = operate(firstValue, secondValue, selectedOperator);
      secondNumberValue = [];
      secondValue = 0;
      updateDisplay(firstValue);
      selectedOperator = this.value;
    }
    console.log(selectedOperator);
  });
}
//////////////////////////////////////

/// Clear button function ///
clearBtn.addEventListener("click", function () {
  updateDisplay();
  firstValue = secondValue = 0;
  numberValue = [];
  secondNumberValue = [];
  selectedOperator = "";
  result = 0;
});
/////////////////////////////

function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}

function substraction(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiplication(firstNum, secondNum) {
  return firstNum * secondNum;
}

function division(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      result = addition(firstNum, secondNum);
      return result;
    case "-":
      result = substraction(firstNum, secondNum);
      return result;
    case "x":
      result = multiplication(firstNum, secondNum);
      return result;
    case "d":
      result = division(firstNum, secondNum);
      return result;
  }
}

equalBtn.addEventListener("click", function () {
  updateDisplay(operate(firstValue, secondValue, selectedOperator).toFixed(3));
});
