console.log("Link successful");
const elements = document.querySelectorAll("#numbers");
const display = document.querySelector("#displayNumbers");
let numberValue = [];

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    numberValue.push(this.value);
    firstOperator;
    display.textContent = numberValue.join("");
    console.log(numberValue);
  });
}
