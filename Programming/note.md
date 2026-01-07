If you want to Learn Any Programming Language you need to know very well two things

1. Data Type
2. Processing

<details>
<summary>💡Tips: Repetition is necessary while learning Coding</summary>
<ul>Instead of going in-depth in various topics, you should practice it more often!</ul>
</details>

<details>
<summary>💬Important Resources</summary>
<ul>
  <li><a href="https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#parseint-is-a-bad-guy">Javascript Quirks</a></li>
  <li><a href="https://javascript.info/">Javascript Tutorial</a></li>
  <li><a href="https://github.com/getify/You-Dont-Know-JS">You Don’t Know JS (2nd Edition, free & open)</a></li>
  <li><a href="https://www.youtube.com/watch?v=cCOL7MC4Pl0">Event Loop visual understanding</a></li>
</ul>
</details>

## **Introduction to JavaScript**
Foundations of programming logic, problem-solving, language concepts, and best practices.

- Developed by **Brendan Eich** in 1995.
- JavaScript is a **loosely** typed, **synchronous**, **single-threaded** language.

<aside>

> In dynamically-typed languages, types are determined at runtime.

> Loosely-typed languages doesn’t strictly enforce type rules. You can mix different types in operations, and the language itself tries to convert them automatically.

<details>
<summary>Code Example</summary>

```js
let num = 10;     // num is a number
num = "Hello";   // now num is a string (no error!)

console.log(5 + "5");  // Output: "55" (number + string = string)
console.log("5" - 2);  // Output: 3 (string converted to number)
```
</details>

## **Variable Declarations**

`var`, `let`, and `const` are the three ways to declare variables.

| **Keyword** | **Can Be Reassigned?** | **Can Be Redeclared?** | **TDZ?** | **Hoisted?** |
| --- | --- | --- | --- | --- |
| `var` | Yes | Yes | No | Yes |
| `let` | Yes | No | Yes | Yes |
| `const` | No | No | Yes | Yes |


>💡 **`const`** only prevents the reassignment of the variable, it doesn’t make the variable immutable. Objects declared with **`const`** can still be mutated.

> You should understand `const` declarations as "create a variable whose *identity* remains constant", not "whose *value* remains constant" — or, "create immutable [bindings](https://developer.mozilla.org/en-US/docs/Glossary/Binding)", not "immutable values".

## **Data Types in JavaScript**

### **Primitive Types**

- `string`
- `number` → Represents both integer and floating-point numbers, integers are limited by ±(253-1)
- `boolean`
- `null` → Represents absence/empty ness of value.
- `undefined` → Represents a declared variable without an assigned value.
- `symbol` → Unique, immutable value (often used for object keys).
- `bigint` → Represents arbitrary large integers (e.g., `123n`).

### **Reference Types**

- `object` → Includes Objects, Arrays, Functions, Dates, RegExp, etc.

**Operation** → [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)

## **More About Primitives and Reference Types**

### 1. **Primitives** (Immutable & Passed by Value)
- Primitives are immutable, meaning their value cannot be changed once assigned.

  <details>
  <summary>Code Example</summary>

  ```js
  let user = "Jhon";
  user[0] = "Z"; // can’t modify the existing value
  console.log(user); // Output: "Jhon" (strings are immutable)

  // But can reassign a new value to the variable
  user = "Eve"
  console.log(user); // Output : "Eve"
  ```
  </details>

- When passed to a function or assigned to another a new variable, a copy is created, and each variable holds its own independent value.

  <details>
  <summary>Code Example</summary>

  ```js
  let user = "Jhon";
  let newUser = user; // newUser is a copy of user
  console.log({user, newUser});

  // But can reassign a new value to the variable
  user = "Eve"
  console.log(user); // Output : "Eve"
  ```
  </details>

- Primitives are compared by value, they are considered equal if they have the same content

  <details>
  <summary>Code Example</summary>

  ```js
  let a = "xyz";
  let b = "xyz";
  console.log(a === b); // Output: true (same value)
  ```
  </details>

### 2. **Reference Types** (Mutable & Passed by Reference)
- Reference types (objects, arrays, functions) are mutable, meaning their contents can be modified.

  <details>
  <summary>Code Example</summary>

  ```js
  let user = ['Ravi', 'Sonu']
  user[1] = 'Sunil'; // can modify the existing value
  console.log(user); // Output: ['Ravi', 'Sunil']
  ```
  </details>

- When passed to a function or assigned to another a new variable, both refers to the same memory location, meaning changes affect both.

  <details>
  <summary>Code Example</summary>

  ```js
  let user = { name: "Ravi" };
  let newuser = user; // Both user and newuser point to the same memory location

  console.log({user, newuser});

  newuser.text = "Raj"; // modifying newuser also affects both
  console.log(user.text); // Output: "Raj"
  console.log(newuser.text); // Output: "Raj"
  ```
  </details>

- Objects are compared by reference, they are considered equal only if they reference the same memory location.

  <details>
  <summary>Code Example</summary>

  ```js
  console.log({} === {}); // Output: always false (different references)
  ```
  </details>


## **Type Conversion**

Also known as **typecasting**, it means the **conversion** of a value from one data type to another.

### **Implicit Conversion (Type Coercion)**

- When JavaScript automatically converts one type to another.

- **Coercion Rules**
  - `+` operator → String concatenation if one operand is a string.
  - `-`, `*` ,`/` → tries to convert strings to numbers.
  - Booleans → `true` → `1`, `false` → `0`.

### **Explicit Conversion**

- When developer explicitly converts one type to another.

Mostly use `Number()`,`String()` & `Boolean()` to convert a value into number, string and boolean type respectively.

String to number 

- `parseInt()`
- `parseFloat()`

>💡**NaN (Not-a-Number)**  is a special value of the **`Number`,** represents an **invalid number**.

> When it occurs?
>  - Converting an **invalid string** **to a number**.
>  - Performing invalid mathematical operations.

>🤔 NaN is not equal to anything, even itself!  So how do check if something is NaN? 
👉 Using **`isNaN()`**

>💡JavaScript’s **loose equality (`==`)** performs type coercion, while **strict equality (`===`)** does not perform type coercion.

## **String Interpolation**

- Allows to embed variables (or any valid expressions) directly inside a string using **template literals** (``).

### `typeof` Operator

Returns a string indicating the **type** of a value.
    
>💡 `typeof null` returning "object" is a bug. It can’t be fixed, because that would break the existing legacy codebase. 

[Code examples covered so far](./how_js_work/variable-datatype.js)

## **Conditional Statements**

Used to make decisions based on certain conditions.

| Concept | Description |
|---------|-------------|
| **If-else**| Used for general conditional branching |
| **Switch** | Used when checking **one fixed value** against multiple cases, uses **strict equality (`===`)** meaning types must match, **Cannot use relational operators** (`>`, `<`, etc.). |
| **Ternary Operator (`? :`)**  | A shorthand for simple conditional expressions |

[Code examples covered so far](./_loops_control_flow/ifelse_switch_ternary.js)

## **Truthy** and **Falsy** Values

Determine how expressions evaluate in boolean contexts (like in  `if-else` statements).

### **Falsy Values**

There are exactly 8 **falsy values** in JavaScript

&nbsp; `false` &nbsp; `0` &nbsp; `-0` &nbsp; `0n` (BigInt zero) &nbsp; `""` (empty string) &nbsp; `null` &nbsp; `undefined` &nbsp; `NaN` &nbsp;

### **Truthy Values**

Everything else is **truthy**, including:

- All objects (including empty objects `{}` and arrays `[]`)
- Non-empty strings: `"hello"`, `"0"`, `"false"`
- Non-zero numbers (including negative numbers and `Infinity`)
- Functions, Symbols, and BigInt.
- `new Boolean(false)` (it’s an object, not primitive `false` and objects are always truthy)

> [Learn more about the quirks of truthy and falsy values.](https://akgbytes.hashnode.dev/mastering-truthy-and-falsy-in-js-no-more-confusion)

### **Logical Operators**

- `&&` returns the first falsy value.
- `||` returns the first truthy value.
- `??` returns the first defined value
- `!` negates the boolean value.
- `!!` converts a value to its boolean equivalent.


## **Loops in JavaScript**

Loops allow you to execute a block of code **multiple times** based on a condition.

### **For Loop**

- Used when the **number of iterations is known**.
- Consists of 3 parts ⇒ I**nitialization, Condition, Updation**.

<img src="./_loops_control_flow/working.png" alt="For Loop working" style="max-width: 100%; height: auto; display: block; margin: 1em 0;">

### **While Loop**

- Used when **the number of iterations is unknown** and depends on a condition.
- The condition is checked **before** executing the loop body.

### **Do-While Loop**

- Similar to `while`, but **executes at least once**, even if the condition is `false`.
- The condition is checked **after** the loop body executes.

### **for...of Loop**

- Used to iterates over **values** of an iterable (like array, string).

### **for...in Loop**

- Used for iterating over object properties but should be used carefully, as it iterates over inherited properties as well.
- It iterates over the **keys** of an object or indices of an array.

## **Break and Continue Statements**

| **Break Statement** | **Continue Statement** |
|---------------------|-----------------------|
| **Exits** the loop immediately when a condition is met. | **Skips** the current iteration and moves to the next one. |

[Code examples covered so far](./_loops_control_flow/iterator.js)

## **Functions in JavaScript**

Functions `factory do something (only one work)` are reusable piece of code designed to perform a particular task.

### Function Statement (Function Declaration)

Simple fn → Hoisted, means can be accessed before declaration.

### Function Expression

Functions that are assigned to a variable.

Not hoisted means they can’t be accessed before declaration.

### Anonymous Function

Functions without name, they are usually used as values in function expressions or used as callbacks.