const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const circle = document.querySelector(".circle");

btn1.addEventListener("click", () => {
  circle.style.transform = "translateY(0px)";
});
btn2.addEventListener("click", () => {
  circle.style.transform = "translateY(-46px)";
});
btn3.addEventListener("click", () => {
  circle.style.transform = "translateY(-90px)";
});
btn4.addEventListener("click", () => {
  circle.style.transform = "translateY(-135px)";
});
btn5.addEventListener("click", () => {
  circle.style.transform = "translateY(-180px)";
});
btn6.addEventListener("click", () => {
  circle.style.transform = "translateY(-226px)";
});
btn7.addEventListener("click", () => {
  circle.style.transform = "translateY(-270px)";
});
btn8.addEventListener("click", () => {
  circle.style.transform = "translateY(-315px)";
});
