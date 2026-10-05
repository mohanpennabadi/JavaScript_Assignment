// Variables
var name = "Mohan";
let age = 22;
const country = "India";
console.log(name,age,country);

// Data Types
let taskName = "JavaScript Assignment";     // String
let taskId = 101;                                 // Number
let completed = false;                              // Boolean
let description = null;                   // Null
let status;                                    // Undefined
let skills = ["HTML", "CSS", "JavaScript"];       // Array
let employee = {
    name: "Mohan",
    role: "Developer"
};      // Object

// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment Operators
let x = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);

// Comparison Operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");

// Logical Operators
let hasName = true;
let hasPriority = true;
console.log(hasName && hasPriority);
console.log(hasName || hasPriority);
console.log(!hasName);

// Type Coercion

console.log("10" + 5); // "105"
console.log("10" - 5); // 5

// Explicit conversion

console.log(Number("100"));
console.log(String(100));
console.log(Boolean(1));