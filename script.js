/*const body = document.body;
const button = document.getElementById("color-button");

button.addEventListener("click", function() {
  body.style.background = "linear-gradient(to right, #00F260, #0575E6)";
 
}); 

const myButton = document.getElementById("myButton");
myButton.classList.add("myClass"); */

const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", () => {
  document.body.classList.toggle("color2");
});