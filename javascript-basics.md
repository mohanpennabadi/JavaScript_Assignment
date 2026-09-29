# JavaScript Basics

2. Variables, Data Types and Operators

var, let and const

`var` is function-scoped and can be redeclared and reassigned.

`let` is block-scoped and can be reassigned but cannot be redeclared in the same scope.

`const` is block-scoped and cannot be reassigned or redeclared.

# == vs ===

`==` compares values after performing type conversion.

`===` compares both value and data type without type conversion.

Example:

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false