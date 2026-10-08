const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const tasks = [];
const dueDate = document.getElementById("dueDate");
const today = new Date().toISOString().split("T")[0];
dueDate.min = today;
function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === "Completed").length;
    const pending = tasks.filter(task => task.status === "Pending").length;
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}
updateTaskSummary();
const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = {
        employee: document.getElementById("employeeName").value,
        department: document.getElementById("department").value,
        task: document.getElementById("task").value,
        priority: document.getElementById("priority").value,
        dueDate: document.getElementById("dueDate").value,
        status: "Pending"
    };

    tasks.push(task);
    saveTasks();
    taskForm.reset();
    updateTaskSummary();
    displayTasks();
});
const searchTask = document.getElementById("searchTask");
const filterDepartment = document.getElementById("filterDepartment");
const filterStatus = document.getElementById("filterStatus");
const taskList = document.getElementById("taskList");
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) tasks.push(...JSON.parse(saved));
}
function displayTasks() {
    const search = searchTask.value.toLowerCase();
    taskList.innerHTML = tasks.filter(t =>
        (!search || t.employee.toLowerCase().includes(search) || t.task.toLowerCase().includes(search)) &&
        (!filterDepartment.value || t.department === filterDepartment.value) &&
        (!filterStatus.value || t.status === filterStatus.value)
    ).map(t => {
        const i = tasks.indexOf(t);
        return `<tr><td>${t.employee}</td><td>${t.department}</td><td>${t.task}</td><td>${t.priority}</td><td>${t.dueDate}</td><td>${t.status}</td><td><button onclick="completeTask(${i})">Complete</button> <button onclick="deleteTask(${i})">Delete</button></td></tr>`;
    }).join("");
}
function completeTask(i) {
    tasks[i].status = "Completed";
    saveTasks();
    updateTaskSummary();
    displayTasks();
}
function deleteTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    updateTaskSummary();
    displayTasks();
}
searchTask.addEventListener("input", displayTasks);
filterDepartment.addEventListener("change", displayTasks);
filterStatus.addEventListener("change", displayTasks);
loadTasks();
updateTaskSummary();
displayTasks();