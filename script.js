const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

function updateTaskSummary() {
    totalTasks.textContent = 0;
    completedTasks.textContent = 0;
    pendingTasks.textContent = 0;
}