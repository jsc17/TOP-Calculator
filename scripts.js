let currentValue = "",
  storedValue = "",
  operator = "",
  history = [];

const historyDisplay = document.querySelector("#history");
const currentDisplay = document.querySelector("#current");
const keyButtons = document.querySelectorAll(".button-num");
const operatorButtons = document.querySelectorAll(".button-op");
const clearButton = document.querySelector("#clear");
const delButton = document.querySelector("#del");
const equalButton = document.querySelector("#equal");

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
  f;
  currentDisplay.innerHTML = "0";
  history = [];
}

function del() {
  currentValue = currentValue.substring(0, currentValue.length - 1);
  if (currentValue == "") {
    currentDisplay.innerText = "0";
  } else {
    currentDisplay.innerText = currentValue;
  }
}

function operate() {
  if (currentValue == "") {
    currentValue = currentDisplay.innerText;
  }
  if (storedValue == "" || operator == "") return;
  let result = "";
  switch (operator) {
    case "+":
      result = add(parseFloat(storedValue), parseFloat(currentValue));
      break;
    case "-":
      result = subtract(parseFloat(storedValue), parseFloat(currentValue));
      break;
    case "x":
      result = multiply(parseFloat(storedValue), parseFloat(currentValue));
      break;
    case "/":
      result = divide(parseFloat(storedValue), parseFloat(currentValue));
      break;
  }
  history.push(storedValue + " " + operator + " " + currentValue + " = ");
  historyDisplay.innerText = history.reduce((result, string) => {
    return (result += string);
  });
  storedValue = result;
  currentDisplay.innerText = result;
  currentValue = "";
}

function clickOperator(target) {
  if (storedValue != "") {
    operate();
    operator = target;
  } else {
    operator = target;
    storedValue = currentValue;
    currentValue = "";
    historyDisplay.innerText = storedValue + " " + operator;
    currentDisplay.innerText = "0";
  }
}

function clickNumber(target) {
  if (target == ".")
    if (currentValue.includes(".")) {
      return;
    } else if (currentValue == "") {
      currentValue += "0";
    }
  if (currentValue == "") {
    currentValue = target;
  } else {
    currentValue += target;
  }
  currentDisplay.innerText = currentValue;
}

keyButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    clickNumber(e.target.innerText);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    clickOperator(e.target.innerText);
  });
});

delButton.addEventListener("click", function (e) {
  del(e.target.innerText);
});
clearButton.addEventListener("click", function (e) {
  clear(e.target.innerText);
});
equalButton.addEventListener("click", function (e) {
  operate(e.target.innerText);
});
