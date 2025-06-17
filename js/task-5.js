function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btn.addEventListener("click" , function(e){
  const colr = getRandomHexColor();
  document.body.style.backgroundColor = colr;
  colorText.textContent = colr;
})