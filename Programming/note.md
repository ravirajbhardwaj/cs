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


> **`const`** only prevents the reassignment of the variable, it doesn’t make the variable immutable. Objects declared with **`const`** can still be mutated.

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

[Code Examples](./how_js_work/variable-datatype.js)

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
  <br/>

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
  <br/>

- Primitives are compared by value, they are considered equal if they have the same content

  <details>
  <summary>Code Example</summary>

  ```js
  let a = "xyz";
  let b = "xyz";
  console.log(a === b); // Output: true (same value)
  ```
  </details>
  <br/>

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
  <br/>

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
  <br/>

- Objects are compared by reference, they are considered equal only if they reference the same memory location.

  <details>
  <summary>Code Example</summary>

  ```js
  console.log({} === {}); // Output: always false (different references)
  ```
  </details>
  <br/>


## **Type Conversion**

Also known as **typecasting**, it means the **conversion** of a value from one data type to another.

### **Implicit Conversion (Type Coercion)**

- When JavaScript automatically converts one type to another.

- **Coercion Rules**
  - `+` operator → String concatenation if one operand is a string.
  - `-`, `*` ,`/` → tries to convert strings to numbers.
  - Booleans → `true` → `1`, `false` → `0`.