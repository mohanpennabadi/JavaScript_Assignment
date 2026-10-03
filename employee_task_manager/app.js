let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let employees = [];

const taskForm = document.getElementById("taskForm");

const employeeName = document.getElementById("employeeName");
const department = document.getElementById("department");
const taskInput = document.getElementById("task");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");

const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const statusFilter = document.getElementById("statusFilter");

const taskTableBody = document.getElementById("taskTableBody");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const taskCount = document.getElementById("taskCount");

const formMessage = document.getElementById("formMessage");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const emptyMessage = document.getElementById("emptyMessage");

displayTasks();
loadEmployees();

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    try {

        const employee = employeeName.value.trim();
        const selectedDepartment = department.value;
        const task = taskInput.value.trim();
        const selectedPriority = priority.value;
        const date = dueDate.value;

        validateTask(
            employee,
            selectedDepartment,
            task,
            selectedPriority,
            date
        );

        addTask(
            employee,
            selectedDepartment,
            task,
            selectedPriority,
            date
        );

        taskForm.reset();

        formMessage.textContent = "Task added successfully.";
        formMessage.className = "success-message";

    } catch (error) {

        formMessage.textContent = error.message;
        formMessage.className = "error-message";

        console.error(error);

    } finally {

        console.log("Task submission completed.");

    }
});

function validateTask(employee, department, task, priority, date) {

    const values = [
        employee,
        department,
        task,
        priority,
        date
    ];

    const allFieldsFilled = values.every(function (value) {
        return value !== "";
    });

    if (!allFieldsFilled) {
        throw new Error("Please fill all task details.");
    }

    return true;
}

function addTask(employee, department, task, priority, date) {

    const newTask = {
        id: Date.now(),
        employee: employee,
        department: department,
        task: task,
        priority: priority,
        dueDate: date,
        status: "Pending"
    };

    tasks.push(newTask);

    saveTasks();

    displayTasks();
}

function saveTasks() {

    const taskData = JSON.stringify(tasks);

    localStorage.setItem("tasks", taskData);
}

function displayTasks(taskList = tasks) {

    taskTableBody.innerHTML = "";

    updateTaskCounts();

    if (taskList.length === 0) {

        emptyMessage.style.display = "block";
        document.querySelector(".table-container").style.display = "none";
        taskCount.textContent = "0 tasks";

        return;
    }

    emptyMessage.style.display = "none";
    document.querySelector(".table-container").style.display = "block";

    taskCount.textContent =
        `${taskList.length} task${taskList.length === 1 ? "" : "s"}`;

    taskList.forEach(function (task) {

        const row = document.createElement("tr");

        const employeeCell = document.createElement("td");
        employeeCell.textContent = task.employee;

        const departmentCell = document.createElement("td");
        departmentCell.textContent = task.department;

        const taskCell = document.createElement("td");
        taskCell.textContent = task.task;

        const priorityCell = document.createElement("td");

        const prioritySpan = document.createElement("span");

        prioritySpan.textContent = task.priority;

        prioritySpan.classList.add(
            "priority",
            task.priority.toLowerCase()
        );

        priorityCell.appendChild(prioritySpan);

        const dateCell = document.createElement("td");
        dateCell.textContent = formatDate(task.dueDate);

        const statusCell = document.createElement("td");

        const statusSpan = document.createElement("span");

        statusSpan.textContent = task.status;

        statusSpan.classList.add(
            "status",
            getStatusClass(task.status)
        );

        statusCell.appendChild(statusSpan);

        const actionCell = document.createElement("td");

        const completeButton =
            document.createElement("button");

        completeButton.textContent = "Complete";

        completeButton.classList.add(
            "action-button",
            "complete-button"
        );

        completeButton.dataset.action = "complete";
        completeButton.dataset.id = task.id;

        if (task.status === "Completed") {
            completeButton.disabled = true;
        }

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add(
            "action-button",
            "delete-button"
        );

        deleteButton.dataset.action = "delete";
        deleteButton.dataset.id = task.id;

        actionCell.appendChild(completeButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(employeeCell);
        row.appendChild(departmentCell);
        row.appendChild(taskCell);
        row.appendChild(priorityCell);
        row.appendChild(dateCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);

        taskTableBody.appendChild(row);
    });
}

function updateTaskCounts() {

    totalTasks.textContent = tasks.length;

    const completed = tasks.reduce(
        function (count, task) {

            if (task.status === "Completed") {
                return count + 1;
            }

            return count;
        },
        0
    );

    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}

taskTableBody.addEventListener("click", function (event) {

    const clickedElement = event.target;

    if (!clickedElement.classList.contains("action-button")) {
        return;
    }

    const taskId =
        Number(clickedElement.dataset.id);

    const action =
        clickedElement.dataset.action;

    if (action === "complete") {
        updateTaskStatus(taskId);
    }

    if (action === "delete") {
        deleteTask(taskId);
    }
});

function updateTaskStatus(id) {

    const task = tasks.find(function (task) {
        return task.id === id;
    });

    if (task) {
        task.status = "Completed";
    }

    saveTasks();

    applyFilters();
}

function deleteTask(id) {

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();

    applyFilters();
}

searchInput.addEventListener(
    "input",
    applyFilters
);

departmentFilter.addEventListener(
    "change",
    applyFilters
);

statusFilter.addEventListener(
    "change",
    applyFilters
);

function applyFilters() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    const selectedDepartment =
        departmentFilter.value;

    const selectedStatus =
        statusFilter.value;

    const filteredTasks =
        filterTasks(
            searchText,
            selectedDepartment,
            selectedStatus
        );

    displayTasks(filteredTasks);
}

function filterTasks(
    searchText,
    selectedDepartment,
    selectedStatus
) {

    return tasks.filter(function (task) {

        const employeeMatch =
            task.employee
                .toLowerCase()
                .includes(searchText);

        const taskMatch =
            task.task
                .toLowerCase()
                .includes(searchText);

        const searchMatch =
            employeeMatch || taskMatch;

        const departmentMatch =
            selectedDepartment === "" ||
            task.department === selectedDepartment;

        const statusMatch =
            selectedStatus === "" ||
            task.status === selectedStatus;

        return (
            searchMatch &&
            departmentMatch &&
            statusMatch
        );
    });
}

function formatDate(date) {

    const parts = date.split("-");

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function getStatusClass(status) {

    if (status === "Completed") {
        return "status-completed";
    }

    return "status-pending";
}

function fetchEmployees() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            const employeeData = [
                {
                    id: 1,
                    name: "Rahul Sharma",
                    department: "IT",
                    email: "rahul@example.com"
                },
                {
                    id: 2,
                    name: "Priya Singh",
                    department: "HR",
                    email: "priya@example.com"
                },
                {
                    id: 3,
                    name: "Arun Kumar",
                    department: "Finance",
                    email: "arun@example.com"
                },
                {
                    id: 4,
                    name: "Sneha Patel",
                    department: "Marketing",
                    email: "sneha@example.com"
                }
            ];

            if (employeeData.length > 0) {
                resolve(employeeData);
            } else {
                reject(
                    new Error("No employees found.")
                );
            }

        }, 2000);
    });
}

async function loadEmployees() {

    loadingMessage.style.display = "block";
    errorMessage.style.display = "none";

    try {

        employees = await fetchEmployees();

        console.log("Employees loaded:", employees);

    } catch (error) {

        errorMessage.textContent =
            "Unable to load employee data.";

        errorMessage.style.display = "block";

        console.error(error);

    } finally {

        loadingMessage.style.display = "none";
    }
}