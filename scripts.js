let currentValue = "",
  storedValue = "",
  operator = "",
  history = [];

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
  if(target == ".")
    if(currentValue.includes(".")){
      return;} else if (currentValue == ""){
        currentValue += "0"
      }
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
      operate();
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      clickOperator(target);
      break;
    // default case catches any numbers pressed to add to the current value
    default:
      clickNumber(target);
      break;
  }
}

keyButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    onClick(e.target.innerText);
  });
});
