// Nhập tên môn học, sau đó hiển thị danh sách môn học. Trong trường hợp người dùng không nhập dữ liệu thì hiển thị thông báo alert(“tên môn học không được để trống!”).
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector(".ul");

let subjects = [];

btn.addEventListener("click", function () {
    const subject = input.value.trim();
    if(subject === "") {
        alert("Tên môn học không được để trống!");
    } else {
        subjects.push(subject)
        const li = document.createElement("li");
        li.innerText = subject;
        ul.appendChild(li);
    }
    input.value = "";
})

