// 1. trim()
let employeeName = "   Mohan Reddy   ";
console.log("Original:");
console.log(employeeName);
console.log("After trim():");
console.log(employeeName.trim());

// 2. toUpperCase()
let task = "learn javascript";
console.log("Uppercase:");
console.log(task.toUpperCase());
// 3. toLowerCase()
let employee = "MOHAN REDDY";
console.log("Lowercase:");
console.log(employee.toLowerCase());

// 4. includes()
let taskDescription = "Learn JavaScript array methods";

console.log("Includes JavaScript:");
console.log(taskDescription.includes("JavaScript"));

// 5. split()
let skills = "JavaScript,Python,SQL";

let skillArray = skills.split(",");

console.log("After split():");
console.log(skillArray);

// 6. replace()
let message = "Learn Java";

let updatedMessage = message.replace(
    "Java",
    "JavaScript"
);

console.log("After replace():");
console.log(updatedMessage);

// 7. slice()
let language = "JavaScript";

console.log("Using slice():");
console.log(language.slice(0, 4));

// 8. Case-insensitive employee/task search
let tasks = [
    "Learn JavaScript",
    "Practice SQL",
    "Learn Python",
    "Build JavaScript Project"
];

let searchText = "javascript";

let searchResults = tasks.filter(task =>
    task.toLowerCase().includes(searchText.toLowerCase())
);

console.log("Case-insensitive search:");
console.log(searchResults);

// 9. Count number of words
let description =
    "Learn JavaScript array methods and strings";

let words = description.trim().split(/\s+/);

console.log("Number of words:");
console.log(words.length);

// 10. Reverse a string
let text = "JavaScript";
let reversedText = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}

console.log("Original string:");
console.log(text);

console.log("Reversed string:");
console.log(reversedText);

// palindrome
let word = "madam";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

if (word === reversedWord) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}