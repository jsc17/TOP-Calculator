let first = "",
  second = "",
  operator = "";

const history = document.querySelector("#history");
const current = document.querySelector("#current");

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

function equals() {}

function onClickNumber() {}

function onClickOperator() {}
