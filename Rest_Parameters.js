// Create a function that accepts any number of numeric arguments and returns their sum using rest parameters
total=0
function sum(...rest){
    for(let i of rest){
        total=total+i
    }
    return total
}
console.log(sum(2,1,2,4,5,6,88,3,1,54,6,3))