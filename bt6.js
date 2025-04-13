let size = document.getElementById("size");
let tangBtn = document.getElementById("tang-btn");
let giamBtn = document.getElementById("giam-btn");
let sizeDefault = 20;
tangBtn.addEventListener("click", tang);
function tang() {
    size.style.fontSize = sizeDefault++ + "px";
}
giamBtn.addEventListener("click", giam);
function giam() {
    size.style.fontSize = sizeDefault-- + "px";
}