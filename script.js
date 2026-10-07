const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const tasks = [];
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

    taskForm.reset();
    updateTaskSummary();
});