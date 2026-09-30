let tasks = [];

// 1. Handle form submission and read form values
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let employee = document.getElementById("employeeName").value.trim();
    let department = document.getElementById("department").value.trim();
    let task = document.getElementById("task").value.trim();
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;

    let message = document.querySelector("#message");

    // 2. Validate required fields
    if (employee === "" || department === "" || task === "" ||
        priority === "" || dueDate === "") {

        message.textContent = "Please fill in all fields.";
        message.classList.add("error");
        return;
    }

    // 3. Add the task
    let newTask = {
        employee: employee,
        department: department,
        task: task,
        priority: priority,
        dueDate: dueDate,
        status: "Pending"
    };

    tasks.push(newTask);

    message.textContent = "Task added successfully.";
    message.classList.remove("error");
    message.classList.add("success");

    // 4. Clear the form
    document.getElementById("taskForm").reset();

    displayTasks();
});

// 5. Create table rows dynamically
function displayTasks() {
    let tableBody = document.querySelector("#taskTableBody");

    tableBody.textContent = "";

    // 6. Show empty state
    if (tasks.length === 0) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");

        cell.textContent = "No tasks available";
        cell.colSpan = 6;
        cell.classList.add("empty");

        row.appendChild(cell);
        tableBody.appendChild(row);

        updateCounts();
        return;
    }

    // 7. Display each task
    tasks.forEach(function(task) {
        let row = document.createElement("tr");

        let employeeCell = document.createElement("td");
        employeeCell.textContent = task.employee;

        let departmentCell = document.createElement("td");
        departmentCell.textContent = task.department;

        let taskCell = document.createElement("td");
        taskCell.textContent = task.task;

        let priorityCell = document.createElement("td");
        priorityCell.textContent = task.priority;

        let dateCell = document.createElement("td");
        dateCell.textContent = task.dueDate;

        let statusCell = document.createElement("td");
        statusCell.textContent = task.status;

        row.appendChild(employeeCell);
        row.appendChild(departmentCell);
        row.appendChild(taskCell);
        row.appendChild(priorityCell);
        row.appendChild(dateCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });

    updateCounts();
}

// 8. Show task counts
function updateCounts() {
    let completed = 0;
    let pending = 0;

    tasks.forEach(function(task) {
        if (task.status === "Completed") {
            completed++;
        } else {
            pending++;
        }
    });

    document.querySelector("#totalCount").textContent = tasks.length;
    document.querySelector("#completedCount").textContent = completed;
    document.querySelector("#pendingCount").textContent = pending;
}

// 9. Use querySelectorAll()
let controls = document.querySelectorAll("input, select");
console.log("Number of form controls:", controls.length);

displayTasks();