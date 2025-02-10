# Static Checking: Ensuring Code Quality Before Runtime

## What is Static Checking?

Static checking is a method of verifying the type safety and correctness of a program *before* it is executed.  This is in contrast to dynamic checking, which occurs while the program is running. Static checking typically involves analyzing the source code to identify potential errors such as:

*   **Type errors:** Mismatched data types in operations (e.g., adding a number to a string).
*   **Syntax errors:**  Incorrect use of the programming language's grammar.
*   **Undefined variables:**  Using a variable before it has been declared.
*   **Unreachable code:** Code that will never be executed.
*   **Dead code:** Variables that are never used.

## Benefits of Static Checking

*   **Early Error Detection:** Catch errors early in the development cycle, reducing debugging time.
*   **Improved Code Reliability:**  Leads to more robust and predictable software.
*   **Enhanced Maintainability:** Makes code easier to understand and modify.
*   **Increased Confidence:**  Provides greater assurance that the code will behave as expected.
*   **Performance optimization opportunities**: With more information about the types, compilers can optimize the final product better

## Static Checking in TypeScript

TypeScript is a superset of JavaScript that adds *static typing*. This means you can explicitly define the data types of variables, function parameters, and return values. The TypeScript compiler then performs static analysis to enforce these type constraints.

### How TypeScript Enables Static Checking

*   **Type Annotations:** TypeScript allows you to add type annotations to your code, specifying the expected type of a variable (e.g., `let age: number = 30;`).
*   **Type Inference:**  In many cases, TypeScript can *infer* the type of a variable based on its initial value, even without explicit annotations.
*   **Compiler Errors:** If the TypeScript compiler detects a type error or other potential issue, it will generate an error message, preventing the code from being compiled into JavaScript.

## TS IS A WRAPPER AROUND JS

# TypeScript Types Explained

TypeScript extends JavaScript by adding static typing, which helps catch errors early and improves code maintainability. This document provides an overview of the fundamental types in TypeScript.

## Basic Types

### 1. Boolean

Represents a true or false value.


### 2. Number

All numbers in TypeScript are floating-point values.


### 3. String

Represents textual data.


### 4. Array

Represents a collection of values.


### 5. Tuple

Represents an array with a fixed number of elements whose types are known.


### 6. Enum

A way of giving more friendly names to sets of numeric values.


You can also explicitly set the values:



### 7. Unknown

Represents a type-safe counterpart of `any`. You can't perform operations on an `unknown` without first asserting its specific type.


### 8. Any

Opt-out of type-checking; useful for migrating JavaScript projects to TypeScript.


### 9. Void

Represents the absence of a type; usually used as the return type of functions that do not return a value.


### 10. Null and Undefined

Represent the absence of a value.


By default, `null` and `undefined` are subtypes of all other types. However, when using the `--strictNullChecks` flag, `null` and `undefined` can only be assigned to `any`, `unknown` and their respective types (except `undefined` can also be assigned to `void`).

### 11. Never

Represents the type of values that never occur.  A function returning `never` cannot have a reachable end point.


### 12. Object

Represents a non-primitive type, i.e., anything that is not `number`, `string`, `boolean`, `symbol`, `null`, or `undefined`.


## Advanced Types

### 1. Type Assertions

Tell the compiler the type of a value when you know more than it does.


### 2. Intersection Types

Combines multiple types into one.


### 3. Union Types

Describes a value that can be one of several types.


### 4. Literal Types

Represent specific values.


### 5. Type Aliases

Give a type a new name. They don't actually create a new type - they create a new *name* to refer to that type.


## Conclusion

TypeScript's type system provides powerful ways to define the structure of your data and catch errors at compile time. Understanding and utilizing these types effectively will improve the quality and maintainability of your code.  This document covers the core and common types.  For deeper dives into features like generics, mapped types, and conditional types, refer to the official TypeScript documentation.

