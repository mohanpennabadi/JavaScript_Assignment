// Find even numbers from an array using filter()
let arr=[1,2,3,4,5,6,7,8,9,10]
res=arr.filter((a)=>{
    if(a%2==0){
        return a;
    }
})
console.log(res)


// Calculate the sum of array values using reduce().

let arr1=[1,2,3,4,5,6,7,8,9,10]
res1=arr.reduce(((a,b)=>{
    return a+b
}),0)
console.log(res1)