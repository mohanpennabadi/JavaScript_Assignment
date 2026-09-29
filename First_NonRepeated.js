// Find the first non-repeated character in a string

s="hello how are you?"
result=new Object();
for(let i of s){
    if(Object.keys(result).includes(i)===true){
        result[i]=result[i]+1
    }
    else{
        result[i]=1
    }
}
for(let i in result){
    if(result[i]===1){
        console.log(i)
        break;
    }
}
