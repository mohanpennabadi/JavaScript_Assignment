// 1. Callback function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Mohan", function () {
    console.log("Callback executed");
});

// 2. setTimeout()
setTimeout(function () {
    console.log("Delayed operation completed");
}, 2000);

// 3. setInterval() and clearInterval()
let count = 0;

const timer = setInterval(function () {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(timer);
        console.log("Timer stopped");
    }
}, 1000);

// 4. Promise with resolve and reject
function fetchEmployees(success) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (success) {
                resolve(["Rahul", "Priya", "Arun"]);
            } else {
                reject("Unable to load employees");
            }
        }, 2000);
    });
}

// 5. Promise using then, catch and finally
console.log("Loading employees...");

fetchEmployees(true)
    .then(function (employees) {
        console.log("Employees:", employees);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Loading completed");
    });

// 6. Async / Await with try, catch and finally
async function loadEmployees() {
    console.log("Loading employees...");

    try {
        const employees = await fetchEmployees(true);
        console.log("Employees:", employees);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Loading completed");
    }
}

loadEmployees();