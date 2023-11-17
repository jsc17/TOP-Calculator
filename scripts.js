let currentValue = 0,
  operator = "";

const historyDisplay = document.querySelector("#history");
const currentDisplay = document.querySelector("#current");
const keyButtons = document.querySelectorAll("button");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0) return "Divide by Zero error";
  return num1 / num2;
}

function clear() {}

function del() {}

function equals() {}

function onClick(target) {}

keyButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    onClick(e.target.innerText);
  });
});
