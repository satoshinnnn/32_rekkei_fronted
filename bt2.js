const btn = document.querySelector(".btn");
const counDisplay = document.querySelector(".count");
let count = 0;
btn.addEventListener("click", function () {
    count++
    counDisplay.textContent = count;
})
// innerText, textContent

