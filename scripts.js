let currentValue = "",
  storedValue = "",
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

function clear() {
  currentValue = "";
  storedValue = "";
  operator = "";
  historyDisplay.innerText = "";
  currentDisplay.innerHTML = "0";
}

function del() {
  currentValue = currentValue.substring(0, currentValue.length - 1);
  if (currentValue == "") {
    currentDisplay.innerText = "0";
  } else {
    currentDisplay.innerText = currentValue;
  }
}

function equals() {}

function numberClick(target) {
  if (currentValue == "") {
    currentValue = target;
  } else {
    currentValue += target;
  }
  currentDisplay.innerText = currentValue;
}

function onClick(target) {
  switch (target) {
    case "DEL":
      del();
      break;
    case "CE":
      clear();
      break;
    case "=":
      equals();
      break;
    case ".":
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      break;
    // default case catches any numbers pressed to add to the current value
    default:
      numberClick(target);
      break;
  }
}

keyButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    onClick(e.target.innerText);
  });
});
