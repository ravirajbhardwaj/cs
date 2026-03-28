<h1 align="center">Computer Science</h1>
<div align="center">

[![X Badge](https://img.shields.io/badge/-@eravitw-1ca0f1?style=social&labelColor=red&logo=x&logoColor=black&link=https://x.com/eravitw)](https://x.com/eravitw) &nbsp;
[![Stars Badge](https://img.shields.io/github/stars/ravirajbhardwaj/cs?style=social)](https://github.com/ravirajbhardwaj/cs)&nbsp;
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) &nbsp;
[![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

<p align="center"><strong>Computer science is the study of computers and how computer technology can be used to solve problems.</strong></p>

> How to Build a Strong Foundation:

To build a strong foundation, focus on understanding concepts, not just memorizing, and practice regularly.


---

## 📑 Table of Contents
* [Programming Fundamentals & Logic](#programming-fundametals-(logic))
* [Data Structures & Algorithms](#data-structures--algorithms)
* [Operating Systems](#operating-systems)
* [Computer Networks](#computer-networks)
* [Databases](#databases)

---

# Programming Fundamentals (Logic)

> To learn any programming language well, you need to understand two things:
> 1. **Data Types** — what kind of data you are working with
> 2. **Processing** — how you use and transform that data

---

## Table of Contents

- [Introduction to JavaScript](#introduction-to-javascript)
- [Variable Declarations](#variable-declarations)
- [Data Types](#data-types)
- [Primitives vs Reference Types](#primitives-vs-reference-types)
- [Type Conversion](#type-conversion)
- [String Interpolation & typeof](#string-interpolation--typeof)
- [Conditional Statements](#conditional-statements)
- [Truthy and Falsy Values](#truthy-and-falsy-values)
- [Loops](#loops)
- [Functions](#functions)
- [Memory Allocation](#memory-allocation)
- [Garbage Collection](#garbage-collection)
- [Scope](#scope)
- [Hoisting](#hoisting)
- [Temporal Dead Zone (TDZ)](#temporal-dead-zone-tdz)
- [Shadowing](#shadowing)
- [Global Execution Context](#global-execution-context)
- [Closures](#closures)
- [Partial Application](#partial-application)
- [Currying](#currying)
- [Once Function](#once-function)
- [Memoization](#memoization)
- [Function Composition](#function-composition)
- [this Keyword](#this-keyword)
- [Prototypes](#prototypes)
- [Constructor Functions](#constructor-functions)
- [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
- [Miscellaneous](#miscellaneous)
- [Resources](#resources)

---

## Introduction to JavaScript

- Developed by **Brendan Eich** in **1995**.
- JavaScript is a **loosely typed**, **synchronous**, **single-threaded** language.

> In **dynamically typed** languages, types are determined at runtime.

> **Loosely typed** means the language doesn't strictly enforce type rules — you can mix types and JavaScript tries to convert them automatically.

```js
let num = 10;
num = "Hello";   // no error — type changed at runtime

console.log(5 + "5");  // "55" (number + string = string)
console.log("5" - 2);  // 3   (string converted to number)
```

---

## Variable Declarations

`var`, `let`, and `const` are the three ways to declare variables.

| Keyword | Reassignable | Redeclarable | TDZ | Hoisted |
|---------|-------------|--------------|-----|---------|
| `var` | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| `let` | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes |
| `const` | ❌ No | ❌ No | ✅ Yes | ✅ Yes |

> **`const`** only prevents reassignment of the variable — it doesn't make the value immutable. Objects declared with `const` can still be mutated.

> Think of `const` as: *"the binding stays constant"*, not *"the value stays constant"*.

---

## Data Types

### Primitive Types

| Type | Description |
|------|-------------|
| `string` | Text |
| `number` | Integers and floats; limited to ±(2⁵³ − 1) |
| `boolean` | `true` or `false` |
| `null` | Intentional absence of value |
| `undefined` | Declared variable without an assigned value |
| `symbol` | Unique, immutable value — often used as object keys |
| `bigint` | Arbitrarily large integers (e.g., `123n`) |

### Reference Types

| Type | Description |
|------|-------------|
| `object` | Includes Objects, Arrays, Functions, Dates, RegExp, etc. |

📌 [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)

---

## Primitives vs Reference Types

### Primitives — Immutable, Passed by Value

- Values cannot be changed once assigned — only the variable can be reassigned.
- Assigning to a new variable creates an **independent copy**.
- Compared **by value**.
- Primitives are compared by value, they are considered equal if they have the same content

```js
let user = "John";
user[0] = "Z";        // silently ignored — strings are immutable
console.log(user);    // "John"

let a = "xyz";
let b = "xyz";
console.log(a === b); // true — same value
```

### Reference Types — Mutable, Passed by Reference

- Contents can be modified after creation.
- Assigning to a new variable makes **both point to the same memory location**.
- Compared **by reference**, not content.
- Objects are compared by reference, they are considered equal only if they reference the same memory location.

```js
let user = { name: "Ravi" };
let newUser = user;       // both point to the same object

newUser.text = "Raj";
console.log(user.text);   // "Raj" — same object was changed

console.log({} === {});   // false — different references
```

---

## Type Conversion

**Type conversion** (typecasting) means converting a value from one type to another.

### Implicit Conversion — Type Coercion

JavaScript converts types automatically in certain situations.

| Operator | Rule |
|----------|------|
| `+` with a string | String concatenation |
| `-` `/` `*` | Tries to convert strings to numbers |
| Boolean in math | `true` → `1`, `false` → `0` |

### Explicit Conversion

Use `Number()`, `String()`, or `Boolean()` to convert types manually.

```js
Number("42")      // 42
parseInt("42px")  // 42
parseFloat("3.5") // 3.5
String(100)       // "100"
Boolean(0)        // false
```

> **`NaN` (Not-a-Number)** represents an invalid number. It appears when converting an invalid string or doing invalid math operations.

> `NaN` is not equal to anything — even itself. Use `isNaN()` to check for it.

> `==` (loose equality) performs type coercion before comparing.
> `===` (strict equality) does not — both value and type must match.

---

## String Interpolation & typeof

### Template Literals

Embed variables or expressions directly inside strings using backticks.

```js
const name = "Ravi";
console.log(`Hello, ${name}!`); // Hello, Ravi!
```

### `typeof` Operator

Returns a string indicating the type of a value.

```js
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"   ← known bug, cannot be fixed
typeof {}           // "object"
typeof function(){} // "function"
```

---

## Conditional Statements

| Statement | When to Use |
|-----------|-------------|
| `if / else` | General conditional branching |
| `switch` | Checking one value against multiple fixed cases; uses `===`; cannot use `>`, `<` |
| `? :` Ternary | Shorthand for simple `if / else` expressions |

---

## Truthy and Falsy Values

Every value in JavaScript evaluates to either truthy or falsy in a boolean context (like an `if` statement).

### Falsy Values — Exactly 8

```
false   0   -0   0n   ""   null   undefined   NaN
```

### Truthy Values — Everything Else, Including

- Empty objects `{}` and arrays `[]`
- Non-empty strings: `"hello"`, `"0"`, `"false"`
- Non-zero numbers, `Infinity`, negative numbers
- Functions, Symbols, BigInt
- `new Boolean(false)` — it's an object, so it's truthy

### Logical Operators

| Operator | Returns |
|----------|---------|
| `&&` | First **falsy** value, or last value if all truthy |
| `\|\|` | First **truthy** value, or last value if all falsy |
| `??` | First value that is not `null` or `undefined` |
| `!` | Negates the boolean value |
| `!!` | Converts a value to its boolean equivalent |

---

## Loops

### `for` — Known Number of Iterations

Three parts: **initialization**, **condition**, **update**.

```js
for (let i = 0; i < 5; i++) { ... }
```

### `while` — Unknown Number of Iterations

Condition is checked **before** each iteration.

### `do...while` — Runs At Least Once

Condition is checked **after** each iteration.

### `for...of` — Iterates Over Values

Works with arrays, strings, and other iterables.

```js
for (const item of ["a", "b", "c"]) { ... }
```

### `for...in` — Iterates Over Object Keys

Iterates over keys (or array indices). Use carefully — also picks up inherited properties.

### `break` and `continue`

| Statement | Effect |
|-----------|--------|
| `break` | Exits the loop immediately |
| `continue` | Skips the current iteration, moves to the next |

---

## Functions

Functions `factory do something` are reusable pieces of code designed to perform **one specific task**.

### Function Declaration

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

Hoisted — can be called before the declaration.

### Function Expression

```js
const greet = function(name) {
  return `Hello, ${name}`;
};
```

Not hoisted — cannot be used before it is defined.

### Arrow Function

```js
const greet = (name) => `Hello, ${name}`;
```

- Concise syntax.
- No own `this` — inherits from surrounding scope.
- No own `arguments` object.

### IIFE — Immediately Invoked Function Expression

```js
(function () {
  // runs immediately
})();
```

Executes right after definition. Keeps variables private, avoids polluting global scope.

### Higher-Order Function

A function that takes another function as an argument or returns a function.

### Callback Function

A function passed as an argument to another function.

### `arguments` Object

Array-like object accessible inside regular functions. Contains all passed arguments — useful when the number of arguments is unknown.

> `arguments` is **not a real array** — it has indexed access and `.length` but no array methods like `.map()` or `.filter()`.

---

## Memory Allocation

### Stack — For Primitives

- Stores primitive values and function call information.
- **Pass-by-value** — values are copied.
- Freed automatically when the function finishes.

### Heap — For Objects

- Stores objects, arrays, and functions.
- The stack holds a **reference** pointing to the object in the heap.
- Objects are **shared by reference**, not copied.

```js
let obj1 = { name: "Ravi" };
let obj2 = obj1;       // reference copy, not a new object
obj2.name = "Ashi";

console.log(obj1.name); // "Ashi" — same object was modified
```

> If a closure keeps access to outer variables, those variables persist in the heap even after the function finishes.

---

## Garbage Collection

JavaScript uses **automatic garbage collection** to free heap memory when objects are no longer needed.

### Mark & Sweep Algorithm

1. **Mark phase** — identifies all objects reachable from the root (global scope, active functions).
2. **Sweep phase** — removes all unreachable objects.

GC runs **periodically** — memory is not freed instantly when a reference is dropped.

```js
let ref = { name: "Ravi" };
ref = null; // object is now unreachable — eligible for GC
```

---

## Scope

Scope defines **where a variable or function can be accessed**.

### Global Scope

Declared outside any function or block. Accessible from anywhere.

### Function Scope

Variables declared inside a function are not accessible outside it. `var` is function-scoped.

```js
function someFn() {
  var city = "SNP";
}
console.log(city); // ReferenceError
```

### Block Scope

`let` and `const` are confined to the `{ }` block they are declared in.

```js
if (true) {
  let user = "Ravi";
}
console.log(user); // ReferenceError
```

### Lexical Scope & Scope Chaining

Where a variable is **defined** determines where it can be used. When a variable isn't found in the current scope, JavaScript looks outward through parent scopes up to global. This is called **scope chaining**.

```js
const user = "Ravi";

function outer() {
  const city = "Delhi";
  function inner() {
    console.log(user); // found in global scope
    console.log(city); // found in outer scope
  }
  inner();
}
```

---

## Hoisting

Hoisting moves variable and function **declarations** to the top of their scope during the compilation phase — before code runs.

- **Function declarations** are fully hoisted — can be called before they appear.
- **`var`** is hoisted and initialized as `undefined`.
- **`let` and `const`** are hoisted but not initialized — accessing them early throws a `ReferenceError` (TDZ).

---

## Temporal Dead Zone (TDZ)

The **TDZ** is the period between when a `let` or `const` variable is hoisted and when it is initialized. Accessing the variable during this period throws a `ReferenceError`.

| Feature | `var` | `let` & `const` |
|---------|-------|-----------------|
| Scope | Function | Block |
| Hoisted as | `undefined` | Uninitialized (TDZ) |
| On global object | Yes (`window` in browsers) | No |

> To make a variable truly **global** in Node.js, you need to attach it to `global`: `global.user = "Ravi"`

---

## Shadowing

When an inner variable has the **same name** as an outer one, it shadows (overrides) the outer one within its scope.

```js
let user = "Ravi"; // global

function something() {
  let user = "Ashi"; // shadows global 'user'
  console.log(user);  // "Ashi"
}
```

---

## Global Execution Context

When JavaScript runs your code, it creates a **Global Execution Context (GEC)** — a container that manages execution.

Two phases:

**1. Memory Phase**
- All variables initialized to `undefined`.
- Function declarations stored with their full definitions.

**2. Execution Phase**
- Code executes line by line.
- Variables get their actual values.

When a function is called, a **Function Execution Context** is created with its own memory and execution phases. Once the function returns, it is removed from the **Call Stack**.

> The **Call Stack** tracks active execution contexts. A new context is pushed when a function is called, and popped when it returns.

📌 [JavaScript Visualizer](https://ui.dev/javascript-visualizer)

---

## Closures

A **closure** is a function that retains access to its outer (lexical) scope even after the outer function has finished executing.

```js
function createCounter() {
  let count = 0; // private

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount()  { return count; },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.count); // undefined — count is private
```

> Closures allow **private variables** — data that exists and works but cannot be accessed from outside.
>
> Because closures keep references to outer variables, those variables are held in the heap and are not garbage collected while the closure is alive.

---

## Partial Application

**Partial application** creates a new function by pre-filling some arguments of an existing function. The rest are provided later.

```js
function partialFn(fn, ...fixedArgs) {
  return (...remainingArgs) => fn(...fixedArgs, ...remainingArgs);
}

function multiply(a, b) { return a * b; }

const multiplyBy5 = partialFn(multiply, 5);
console.log(multiplyBy5(4)); // 20

// Same result with .bind()
const multiplyBy2 = multiply.bind(null, 2);
console.log(multiplyBy2(7)); // 14
```

---

## Currying

**Currying** transforms a multi-argument function into a sequence of single-argument functions.

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next) => curried(...args, ...next);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1, 2, 3); // 6
```

---

## Once Function

The **once** pattern ensures a function executes only **one time**. All subsequent calls are ignored.

```js
function once(fn) {
  let executed = false;
  return (...args) => {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}

const greet = (user) => console.log(`Hello, ${user}`);
const greetOnce = once(greet);

greetOnce("Ravi"); // Hello, Ravi
greetOnce("Ashi"); // (nothing)
```

---

## Memoization

**Memoization** optimizes performance by caching results of expensive function calls. Repeated calls with the same input return the cached result instead of recomputing.

---

## Function Composition

**Function composition** combines multiple functions so the output of one becomes the input of the next — building complex operations from small, focused pieces.

---

## `this` Keyword

`this` refers to the **context** in which a function is running. Its value depends on **how** the function is called — not where it is written.

> `this` = *"who called me?"* — context (संदर्भ) of the current execution.

### In Global Scope

| Environment | `this` |
|-------------|--------|
| Browser | `window` |
| Node.js module | `module.exports` (`{}` by default) |
| ES Module | `undefined` |

### In an Object Method

`this` refers to the object the method belongs to.

```js
const obj = {
  name: "Ravi",
  greet() {
    console.log(this.name); // "Ravi"
  },
};
```

### In a Constructor Function

`this` refers to the new instance being created.

```js
function Student(name) {
  this.name = name;
}
const s1 = new Student("Ravi");
```

### In an Arrow Function

Arrow functions have **no own `this`** — they inherit it from their surrounding lexical scope.

```js
const obj = {
  name: "Ravi",
  greet: () => {
    console.log(this.name); // undefined
  },
};
```

### In a Standalone Function

| Mode | `this` |
|------|--------|
| Non-strict | Global object (`window` / `global`) |
| Strict (`"use strict"`) | `undefined` |

> **This substitution (non-strict):** If `this` is `null` or `undefined`, JavaScript replaces it with the global object.
>
> **Boxing (non-strict):** If `this` is a primitive, it is wrapped in its object equivalent (e.g., `"hello"` → `String {"hello"}`).

### Node.js — Behind the Scenes

Node.js wraps every file in a module function before running it:

```js
(function (exports, require, module, __filename, __dirname) {
  // your code runs here
});
```

This is why `this` at the top of a Node.js file equals `module.exports` — not `global`.

### ES Modules (`import` / `export`)

- Files are **not** wrapped in a function.
- Always run in **strict mode**.
- `this` at the top level is `undefined`.

---

### `call()`, `apply()`, and `bind()`

These methods let you manually set `this` when calling a function.

#### `call()` — Invoke immediately, arguments passed individually

```js
function greet(age, city) {
  console.log(`${this.name}, ${age}, ${city}`);
}
const person = { name: "Ravi" };
greet.call(person, 21, "SNP");
```

#### `apply()` — Invoke immediately, arguments passed as an array

```js
greet.apply(person, [21, "SNP"]);
```

#### `bind()` — Returns a new function with `this` locked in (does not invoke)

```js
const greetRavi = greet.bind(person, 21, "SNP");
greetRavi(); // call later
```

---

## Prototypes

A **prototype** is an object from which other objects inherit properties and methods, forming a **prototype chain**.

When accessing a property, JavaScript first checks the object itself — if not found, it walks up the chain until it hits `null`.

| Term | Meaning |
|------|---------|
| `prototype` | Property on a **constructor function** — defines what instances inherit |
| `__proto__` | Property on an **instance** — points to its prototype |
| `Object.prototype` | Root of all inheritance — every object traces back here |

```js
const parent = {};
const child = Object.create(parent);
console.log(child.__proto__ === parent); // true
```

---

## Constructor Functions

A **constructor function** creates objects with shared properties and methods. Convention: name starts with a capital letter.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

const user = new Person("Ravi", 21);
console.log(user.greet());
```

### What `new` Does

1. Creates a new empty object.
2. Links `object.__proto__` to `Constructor.prototype`.
3. Binds `this` to the new object.
4. Returns the new object (unless you explicitly return a different object).

### Key Notes

- Returning a **non-object** from a constructor is ignored — `this` is returned.
- Returning an **object** replaces `this`.
- **Arrow functions cannot be constructors** — no own `this`.
- Use `new.target` to detect if called without `new`.

```js
function Person(name) {
  if (!new.target) return "Use 'new' to create a Person";
  this.name = name;
}
```

---

## Object-Oriented Programming (OOP)

ES6 `class` syntax is **syntactic sugar** over constructor functions and prototypes — under the hood, it still uses the same prototype system.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const user = new Person("Ravi", 21);
user.greet();
```

### Inheritance

```js
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`${this.year} ${this.brand} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, seats) {
    super(brand, model, year);
    this.seats = seats;
  }
}

const car = new Car("Toyota", "Corolla", 2023, 4);
car.displayInfo(); // 2023 Toyota Corolla
```

`super` calls the parent constructor or parent method. Inside a method: `super.methodName()`.

---

### Four Pillars of OOP

#### Encapsulation — Bundle data, restrict direct access

```js
class BankAccount {
  #balance = 0;

  deposit(amount) { this.#balance += amount; }

  get balance() { return this.#balance; }

  set balance(amount) {
    if (amount >= 0) this.#balance = amount;
  }
}
```

#### Abstraction — Hide implementation, expose only what's needed

```js
class ATM {
  #balance = 1000;

  withdraw(amount) {
    if (this.#hasFunds(amount)) this.#balance -= amount;
  }

  #hasFunds(amount) { return amount <= this.#balance; } // hidden
}
```

| Analogy | Encapsulation | Abstraction |
|---------|--------------|-------------|
| Car | Cannot modify engine internals | Just press the start button |
| ATM | Cannot see how balance is stored | Just call `withdraw()` |

#### Polymorphism — Same method, different behavior per class

```js
class Parent {
  greet() { console.log("Hello from Parent"); }
}
class Child extends Parent {
  greet() { console.log("Hello from Child"); } // overrides parent
}
```

JavaScript does not support method overloading natively — simulate it by checking argument count inside one method.

#### Inheritance — Reuse and extend

Use `extends` and `super` as shown above.

---

### Other Class Features

#### `static` — Belongs to the class, not instances

```js
class MathUtils {
  static PI = 3.14;
  static square(n) { return n * n; }
}
MathUtils.square(4); // 16
```

#### `instanceof` — Checks the prototype chain

```js
const user = new Person("Ravi", 21);
console.log(user instanceof Person); // true
console.log(user instanceof Object); // true
```

#### Autoboxing — Primitives temporarily wrapped as objects

When you call a method on a primitive, JavaScript briefly wraps it in the corresponding object type, runs the method, then discards the wrapper.

```js
"hello".toUpperCase() // JS temporarily: new String("hello").toUpperCase()
```

### `??` — Nullish Coalescing

Returns the right side only if the left is `null` or `undefined`.

```js
const name = userName ?? "Guest";
```

### `?.` — Optional Chaining

Safely navigates nested properties — returns `undefined` instead of throwing if something in the chain is missing.

```js
const city = user?.address?.city;
```

---

## Miscellaneous

**Promise** — An object representing the eventual success or failure of an async operation.

**Debouncing** — Delays a function call until a pause in events (e.g., stop typing).

**Throttling** — Limits a function to run at most once per time interval.

**Delaying** — Runs a function once after a fixed wait.

**Proxies** — Intercept and customize object operations. Do not work directly on primitives — wrap them in an object first.

### Task Queues — Event Loop

| Queue | What Goes In |
|-------|-------------|
| **Microtask** | Promise callbacks (`.then`, `.catch`, `.finally`) |
| **Macrotask** | `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks |

Microtasks always run **before** macrotasks.

---

## Resources

- [JavaScript Quirks (WTF JS)](https://github.com/denysdovhan/wtfjs)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Event Loop — Visual Explanation](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- [Mark & Sweep GC](https://www.youtube.com/watch?v=4qLf0FJMyf0)
- [JavaScript Visualizer](https://ui.dev/javascript-visualizer)
- [JS Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Truthy & Falsy Deep Dive](https://akgbytes.hashnode.dev/mastering-truthy-and-falsy-in-js-no-more-confusion)


> 💡 **Tip:** Instead of going deep into too many topics at once, practice each concept repeatedly. Repetition is what makes things stick.

---

# Data Structures & Algorithms

# Operating Systems

# Computer Networks

# Databases

