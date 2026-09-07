
const inputScreen = document.getElementById("i-s");
const outputScreen = document.getElementById("o-s");

const buttons = document.querySelectorAll(".calc-btn");

let expression = "";

buttons.forEach(function (button) {

  button.addEventListener("click", function () {
    handleInput(button.textContent, button);
  });

});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const isNumberOrOperator = "0123456789+-*/.".includes(key);

  if (key === "Backspace") {
    event.preventDefault();
    handleInput("C", document.querySelector(".clear"));
    return;
  }

  if (isNumberOrOperator) {
    event.preventDefault();
    handleInput(key);
  }
});

function handleInput(value, button) {

    if (button && button.classList.contains("clear")) {
      expression = "";
      inputScreen.textContent = "";
      outputScreen.textContent = "0";
      return;
    }

    if (button && button.classList.contains("equal")) {

      if (expression === "") {
        return;
      }

      try {
        const result = eval(expression);

        inputScreen.textContent = expression + " =";
        outputScreen.textContent = result;

        expression = String(result);

      } catch {
        outputScreen.textContent = "Error";
      }

      return;
    }

    expression += value;

    inputScreen.textContent = expression;

    try {
      outputScreen.textContent = eval(expression);
    } catch {
      outputScreen.textContent = "0";
    }

}
