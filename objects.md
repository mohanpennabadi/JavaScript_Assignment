# Primitive Values (The Photocopy of value)
Primitives are simple, foundational data types: Strings (text), Numbers, Booleans (true/false), undefined, and null.

When you assign a primitive value to a variable, JavaScript stores the actual data directly. If you assign that variable to a new variable, JavaScript makes a completely independent copy of the data.

# Reference Values (The Shared Address)
Reference values are more complex data types: Objects, Arrays, and Functions.

Because these can hold massive amounts of data, JavaScript does not store the data directly in the variable. Instead, the variable holds a pointer or an address to a location in memory where the object lives. If you assign this variable to a new variable, you are only copying the address, not the actual object.