//
tasks = [];
const btn = document.getElementById("btn");
btn.addEventListener("click", pushTask);
function pushTask() {
    const task = document.getElementById("task").value.trim();
    if (task==="") {
        alert("Tên nhiệm vụ không được để trống!");
    } else {       
    tasks.push(task); 
    };
    renderTask(tasks);
    document.getElementById("task").value = "";
}
function renderTask(tasks) {
    const ul = document.getElementById("taskList");
    ul.innerHTML = ""; 
    tasks.forEach((task, index)=> {
        const li = document.createElement("li");
        li.innerHTML = `
        ${task}
        <button onclick="deleteTask(${index})" id="delete-btn">Xóa</button>
        `;
        ul.appendChild(li);
    })
}
function deleteTask(index) {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTask(tasks);
    }
}
