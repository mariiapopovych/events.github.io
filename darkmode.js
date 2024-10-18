var total2 = document.querySelectorAll(".darkM1");
var total3 = total2.length;

var total4 = document.querySelectorAll(".darkM2");
var total5 = total4.length;

function colorModeToggler() {
    for (let i = 0; i < total3; i++) {
      let element1 = document.querySelectorAll(".darkM1")[i];
      element1.classList.toggle("dark-mode1");
    }
    if(total3 > 0) {
      for (let i = 0; i < total5; i++) {
        let element1 = document.querySelectorAll(".darkM2")[i];
        element1.classList.toggle("dark-mode2");
      }
    }
    let element = document.body;
    element.classList.toggle("dark-mode");
  }