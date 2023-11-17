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

function clear() {
  historyDisplay.innerText = "";
  currentDisplay.innerHTML = "0";
}

function del() {
  currentDisplay.innerText = currentDisplay.innerText.substring(
    0,
    currentDisplay.innerText.length - 1
  );
  if (currentDisplay.innerText.length == 0) currentDisplay.innerText = "0";
}

function equals() {}

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
    case "X":
      break;
    // default case catches any numbers pressed to add to the current value
    default:
      if (currentDisplay.innerText == "0") {
        currentDisplay.innerText = target;
      } else {
        currentDisplay.innerText += target;
      }
      break;
  }
}

keyButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    onClick(e.target.innerText);
  });
});
