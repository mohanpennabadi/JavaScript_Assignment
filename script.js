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