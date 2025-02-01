console.log(
  "简易计算机 by.george06350"
);

let flag = 0;

function isNumber(char) {
  return /^\d$/.test(char);
}

document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
let lastScreenValue = "";
let maxItems = 6;
let isSign = true;

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X" && !isSign) {
      if (flag == 1) {
        flag = 0;
      }
      buttonText = "*";
      isSign = true;
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      if (flag == 1) {
        flag = 0;
      }
      screenValue = "";
      screen.value = screenValue;
      screen.classList.remove("negative"); 
      isSign = true;
    } else if (buttonText == "=") {
      checkForBracketMulti();
      if (parseFloat(screen.value) < 0) {
        screen.classList.add("negative");
      } else {
        screen.classList.remove("negative");
      }
    } else if(buttonText=="(" || buttonText==")") {
      if(flag==1){
        flag =0;
      }
      screenValue+=buttonText;
      screen.value=screenValue;
    } 
    else if (isNumber(buttonText)) {
      if (flag == 1) {
        screenValue = buttonText;
        flag = 0;
      } else {
        screenValue += buttonText;
      }
      screen.value = screenValue;
      isSign = false;
      screen.classList.remove("negative"); 
    } else {
      if (flag == 1) {
        flag = 0;
      }
      if (!isSign) {
        screenValue = screen.value + buttonText;
        screen.value = screenValue;
        isSign = true;
      }
      screen.classList.remove("negative"); 
    }
  });
}

document.addEventListener("keydown", function (event) {
});

window.onerror = function () {
  alert("请输入有效的表达式");
  screenValue = "";
  screen.value = screenValue;
  screen.classList.remove("negative");
  console.clear();
};


function checkForBracketMulti() {

  if (eval(screenValue) !== undefined) {
    if (!Number.isInteger(eval(screenValue))){
      screen.value = eval(screenValue).toFixed(2); 
    }
    else {
      screen.value = eval(screenValue);
    }
    
    lastScreenValue = screenValue;
    screenValue = screen.value;
    if (parseFloat(screen.value) < 0) {
      screen.classList.add("negative");
    } else {
      screen.classList.remove("negative");
    }
  }
  flag = 1;
}
