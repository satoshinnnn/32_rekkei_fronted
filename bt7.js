let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2"); 
let img3 = document.getElementById("img3");
let check = 0;
img1.addEventListener("click",phongto);
function phonto(img1,img2,img3) {
    img1.style.width = "1200px";
    img1.style.height = "900px";
    img1.display = "block";
    img1.style.margin = "auto";
    document.body.style.backgroundColor = "grey";
    img2.style.display = "none";
    img3.style.display = "none";
    check = 1;
}
img2.addEventListener("click",phongto);
function phongto() {
    img2.style.width = "1200px";
    img2.style.height = "900px";
    img2.display = "block";
    img2.style.margin = "auto";
    document.body.style.backgroundColor = "grey";
    img1.style.display = "none";
    img3.style.display = "none";
    check = 1;
}
img3.addEventListener("click",phongto);
function phongto() {
    img3.style.width = "1200px";
    img3.style.height = "900px";
    img3.display = "block";
    img3.style.margin = "auto";
    document.body.style.backgroundColor = "grey";
    img1.style.display = "none";
    img2.style.display = "none";
    check = 1;
}
document.body.addEventListener("click", checkOut);
function checkOut(event) {
    if(!img1.contains(event.target) && !img2.contains(event.target) && !img3.contains(event.target) && check) {
        imgDefault(img1)
        imgDefault(img2);
        imgDefault(img3);
        document.body.style.backgroundColor = "rgb(236, 236, 236)";
    }
}
function imgDefault (img) {
    img.style.width = "200px";
    img.style.height = "150px";
    img.style.display = "block";
    img.style.marginTop = "80px"
}