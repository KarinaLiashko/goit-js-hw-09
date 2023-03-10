let intervalValue = null; 

document.querySelector("[data-start]").addEventListener("click", function () { 

    intervalValue = setInterval(function getRandomHexColor() {
         const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
   document.body.style.backgroundColor = randomColor;
    }, 1000);
   });
document.querySelector("[data-stop]").addEventListener("click", function () {
    clearInterval(intervalValue);
  });