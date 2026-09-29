# JavaScript Functions, Scope, Hoisting and Closures
# Parameters vs Arguments
Parameters are variables defined in the function declaration.
Arguments are the actual values passed when calling the function.
Example:
function greet(name) {
    console.log(name);
}
greet("Mohan");
Here, `name` is the parameter and `"Mohan"` is the argument.
## Return Values
A return statement sends a value back from a function.
If a function does not have a return statement, it returns `undefined`.
# Normal Function vs Arrow Function
Normal functions can have their own `this` value depending on how they are called.
Arrow functions do not have their own `this`. They inherit `this` from their surrounding scope.
# Hoisting
Hoisting is JavaScript's behavior where declarations are processed before the code is executed
`var` declarations are hoisted and initialized with `undefined`.
`let` and `const` declarations are hoisted but remain in the Temporal Dead Zone until their declaration is reached.
Function declarations are hoisted and can generally be called before their declaration.
Function expressions are not usable before the variable is initialized.
## Temporal Dead Zone
The Temporal Dead Zone (TDZ) is the period between entering a block/scope and the point where a let or const variable is declared and initialized
## Closure
A closure occurs when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.