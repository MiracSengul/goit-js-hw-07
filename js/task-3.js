const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input" , function (e){
    e.target.value.trim()!=="" ? output.textContent = e.target.value.trim() : output.textContent = "Anonymous";
})