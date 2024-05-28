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

/// listen to number buttons inputs ///
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    if (selectedOperator === "") {
      numberValue.push(this.value);
      firstValue = parseInt(numberValue.join(""));
      display.textContent = firstValue;
    } else if (selectedOperator !== "") {
      secondNumberValue.push(this.value);
      secondValue = parseInt(secondNumberValue.join(""));
      display.textContent = secondValue;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    selectedOperator = this.value;
    console.log(selectedOperator);
  });
}
//////////////////////////////////////

/// Clear button function ///
clearBtn.addEventListener("click", function () {
  display.textContent = "0";
  firstValue = secondValue = 0;
  numberValue = secondNumberValue = [];
  selectedOperator = "";
  result = 0;
});
/////////////////////////////

function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      result = addition(firstNum, secondNum);
      return result;
    case "-":
      console.log("resta");
      break;
  }
}

equalBtn.addEventListener("click", function () {
  display.textContent = operate(firstValue, secondValue, selectedOperator);
});
