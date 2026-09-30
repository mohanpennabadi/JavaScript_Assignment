# Purpose of the finally Block

The `finally` block is used to execute a piece of code after the `try` and `catch` blocks.
It executes whether an error occurs or not.
It is mainly used for cleanup operations or tasks that must always be completed.

Example:

try {
    // Code that may cause an error
} catch (error) {
    // Handle the error
} finally {
    console.log("Task processing completed.");
}

The `finally` block ensures that the required code is executed regardless of whether the operation succeeds or fails.
