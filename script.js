let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

addTask.addEventListener("click", () => {
    if (task.value.trim() === "") {
        alert("Please enter something.");
        return;
    }

    list.innerHTML += `<div class="main"><li>${task.value}</li><div><button onclick="edit(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button></div></div>`;

    task.value = "";
});

function edit(element) {
    task.value = element.parentNode.parentNode.firstElementChild.innerText;
    element.parentNode.parentNode.remove();
    task.focus();
}

function deleteTask(element) {
    element.parentNode.parentNode.remove();
}