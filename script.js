console.log("Link successful");
const elements = document.querySelectorAll("#numbers");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    const numberValue = this.value;
    console.log(numberValue);
  });
}
