console.log("Link successful");
const elements = document.querySelectorAll("#numbers");
const display = document.querySelector("#displayNumbers");
const clearBtn = document.querySelector("#clearBtn");
let numberValue = [];
let joinedValue = 0;

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    numberValue.push(this.value);
    joinedValue = parseInt(numberValue.join(""));
    display.textContent = joinedValue;
    console.log(joinedValue);
  });
}

clearBtn.addEventListener("click", function () {
  display.textContent = "0";
  joinedValue = 0;
  numberValue = [];
});
