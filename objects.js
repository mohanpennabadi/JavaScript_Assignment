// employe object contains id,name,department,and email
let employee={
    name:'mohan',
    id:'2',
    department:'it',
    email:'mohan@gmail.com'
}
// accesing propertirs using dot and bracket notation
let ename=employee.name
let eid=employee["id"]

// add properties
employee.age=23

//update propeties
employee.email='mohan21@gmail.com'

//delete properties
delete employee.age;

//object keys,values,entries

let keys=Object.keys(employee) 
let values=Object.values(employee) 
let entries=Object.entries(employee)

// object destructuring

let { name,id,department}=employee;
console.log(name,id,department)

// we can give variable name and default values 
let {name:n, id:i ,age=25}=employee;
console.log(n,i,age)