// Convert an array of employee objects into an array containing only employee names.
const employees = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const employeeNames = employees.map(emp => emp.name);

console.log(employeeNames); 
