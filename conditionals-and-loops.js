// break
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
// continue

for (let i = 1; i <= 5; i++) 
{
if (i === 3) {
     continue;
    }
console.log(i);
}

// fizz buzz 

for (let i = 1; i <= 50; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}