// global scope
let company = "Bhrish";

function showCompany() {
    console.log(company);
}

showCompany();
// function scope for employee name
function employeeDetails() {
    let employeeName = "Mohan";
    console.log(employeeName);
}

employeeDetails();
if (true) {
    let task = "JavaScript";
    const priority = "High";

    console.log(task);
    console.log(priority);
}

// scope chain
let companyname= "Bhrish";

function outer() {
    let department = "IT";

    function inner() {
        let employee = "Mohan";

        console.log(companyname);
        console.log(department);
        console.log(employee);
    }

    inner();
}

outer();

// closures
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment();
increment();
increment();

// Hoisting with var
console.log(a); // Output: undefined
var a = 10;     // var declaration is hoisted and initialized with undefined

// Hoisting with let
console.log(b); // Error: ReferenceError
let b = 20;     // let is hoisted but remains in the Temporal Dead Zone (TDZ)