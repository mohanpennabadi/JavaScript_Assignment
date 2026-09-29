// 1. Store task records in an array of objects
let tasks = [
    { id: 1, employee: "Mohan", task: "Learn JavaScript", status: "Completed", dueDate: "2026-09-30" },
    { id: 2, employee: "Ravi", task: "Practice SQL", status: "Pending", dueDate: "2026-10-02" },
    { id: 3, employee: "Anu", task: "Learn Python", status: "Completed", dueDate: "2026-10-01" }
];
console.log(tasks);

// 2. Use push(), pop(), shift() and unshift()
tasks.push({
    id: 4,
    employee: "Priya",
    task: "Learn CSS",
    status: "Pending",
    dueDate: "2026-10-03"
});
console.log(tasks);

tasks.pop();
console.log(tasks);

tasks.unshift({
    id: 4,
    employee: "Priya",
    task: "Learn HTML",
    status: "Pending",
    dueDate: "2026-10-03"
});
console.log(tasks);

tasks.shift();
console.log(tasks);

// 3. Use find()

let foundTask = tasks.find(task => task.id === 2);
console.log(foundTask);

// 4. Use filter()

let completedTasks = tasks.filter(task => task.status === "Completed");
console.log(completedTasks);

// 5. Use map()

let employeeNames = tasks.map(task => task.employee);
console.log(employeeNames);

// 6. Use forEach()
tasks.forEach(task => {
    console.log(task.employee);
});

// 7. Use some()
let hasCompletedTask = tasks.some(task => task.status === "Completed");
console.log(hasCompletedTask);

// 8. Use every()
let allCompleted = tasks.every(task => task.status === "Completed");
console.log(allCompleted);

// 9. Use reduce() to calculate the total number of completed tasks
let completedCount = tasks.reduce((count, task) => {
    return task.status === "Completed" ? count + 1 : count;
}, 0);

console.log(completedCount);

// 10. Sort tasks by employee name without changing the original array

let sortedByEmployee = [...tasks].sort((a, b) =>
    a.employee.localeCompare(b.employee)
);

console.log(sortedByEmployee);
console.log(tasks);

//11.  Remove a task from an array using an appropriate approach
let taskIdToRemove = 2;
tasks = tasks.filter(task => task.id !== taskIdToRemove);
console.log(tasks);