// template literals
let name='mohan';
let company='bhrish';
let s=`my name is ${name} currently working in ${company}`;

//array destructuring
let arr=[1,2,3,4,5]
let [a,b,...c]=arr;

//spread operators
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[...arr1,...arr2]
console.log(arr3)

// optional chaining
let obj={
    name:"mohan",
    age:"21"
}
// ?. optional chaining to get propeties of objects if exists other wise undefined
// ?? nullish coalescing operator check whether the value is null or undefined then assigns new value
let address=obj?.adress??"not intialized" 
console.log(address)