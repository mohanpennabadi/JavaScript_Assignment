// • Write a function to find the largest number in an array.
let arr=[28,98,76,45,54,100];
let max=0
for(let i of arr){
    if(i>max){
        max=i
    }
}
console.log(max)