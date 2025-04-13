// Cho người dùng nhập giá trị email vào ô input, kiểm tra email đúng định dạng (phải chứa kí tự @, kết thúc đuôi .com hoặc .vn). Hiển thị kết quả:
const email = document.querySelector(".input");
const btn = document.querySelector(".btn");
const prompt = document.querySelector(".prompt");

btn.addEventListener("click", function () {
    const emailValue = email.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    if (regex.test(emailValue)) {
        prompt.style.display = "block";
        prompt.innerText = "Email hợp lệ!";
        prompt.style.color = "green";
    } else {
        prompt.style.display = "block";
        prompt.innerText = "Email không hợp lệ!";
        prompt.style.color = "red";
    }
    email.value = "";
})

