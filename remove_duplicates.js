// Write a function to remove duplicate values from an array.
let arr=[21,45,98,67,76,67,3,19,3,1,21]
upd_arr=[]
function removeduplicates(...a){
     for(let i of a){
        if(upd_arr.includes(i)===false){
            upd_arr.push(i)
        }
     }
     return upd_arr
}
const a=removeduplicates(...arr)
console.log(a)