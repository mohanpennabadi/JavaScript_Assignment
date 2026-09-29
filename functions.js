// function declaration
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Mohan"));

// function expression
const greetUser = function(name) {
    return "Hello " + name;
};
console.log(greetUser("Mohan"));

//arrow function
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));

//function accepting another function and return the function
function calculate(a, b, operation) {
    return operation(a, b);
}

function addNumbers(x, y) {
    return x + y;
}

console.log(calculate(10, 20, addNumbers));

//Default parameters
function createTask(name, priority = "Medium") {
    console.log(name, priority);
}

createTask("Learn JavaScript");
createTask("Practice Functions", "High");