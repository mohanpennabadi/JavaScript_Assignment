// 1. Use try/catch/finally around code that may fail
try {
    let task = {
        id: 101,
        title: "Learn JavaScript",
        employee: "Mohan"
    };

    console.log(task.title);
} catch (error) {
    console.log("Something went wrong. Please try again.");
    console.error(error);
} finally {
    console.log("Task processing completed.");
}

// 2. Create and throw a custom Error when required task data is missing
function validateTask(task) {
    try {
        if (!task.title || !task.employee) {
            throw new Error("Required task data is missing.");
        }

        console.log("Task is valid.");
    } catch (error) {
        console.log("Unable to create task. Please provide all required details.");
        console.error("Technical Error:", error);
    } finally {
        console.log("Task validation completed.");
    }
}

// 3. Test with valid task
let validTask = {
    title: "Practice SQL",
    employee: "Ravi"
};

validateTask(validTask);
// 4. Test with missing task data
let invalidTask = {
    title: "Learn Python"
}
validateTask(invalidTask);