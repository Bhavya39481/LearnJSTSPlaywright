# JavaScript Keywords and Identifiers â€” Simple Understanding

## One-line idea

**Keywords** are words JavaScript already owns; **identifiers** are names *you* create for your own things (variables, functions, etc.).

## The analogy â€” think of a country's laws vs. names

- **Keywords** are like **traffic signs** â€” they have a fixed, reserved meaning. You can't rename a "STOP" sign to mean something else; it always means stop.
- **Identifiers** are like **names of people** â€” you choose them, but there are a few rules (you can't name a child "123", for example).
- JavaScript is the **government** that decides which words are reserved and which naming rules are allowed.

## What is an identifier?

An **identifier** is simply a name you give to things you create in your code:

- Variables â†’ `let age = 25;`
- Functions â†’ `function greet() { ... }`
- Constants â†’ `const PI = 3.14;`

### The 5 rules for naming identifiers

1. Must start with a **letter** (`a`â€“`z`, `A`â€“`Z`), **underscore** (`_`), or **dollar sign** (`$`).
2. The rest can be **letters, digits (0â€“9), underscore, or dollar sign**.
3. Cannot start with a **digit**.
4. Cannot be a **reserved word** (keyword).
5. Cannot contain **spaces** or special characters like `-`, `@`, `#`, `.` etc.

### Valid vs invalid examples

```js
// âœ… Valid identifiers
let name = "Alice";
let age = 30;
let _private = "hidden";
let $price = 100;
let firstName = "John";     // camelCase is the JS convention

// âŒ Invalid identifiers
let 1name = "nope";         // starts with a digit
let first-name = "nope";    // contains a hyphen
let first name = "nope";    // contains a space
let my@email = "nope";      // contains a special character
```

### Case sensitivity

Identifiers are **case-sensitive**: `name`, `Name`, and `NAME` are three different things.

```js
let name = "Alice";
let Name = "Bob";
let NAME = "Carol";

console.log(name); // "Alice"
console.log(Name); // "Bob"
console.log(NAME); // "Carol"
```

### Good naming habits

- Use **camelCase** for variables and functions â†’ `firstName`, `getUserById`.
- Use **PascalCase** for classes â†’ `UserAccount`.
- Use **UPPER_SNAKE_CASE** for constants â†’ `MAX_RETRIES`.
- Make names **meaningful** â€” `totalPrice` is better than `x`.

## What is a keyword?

A **keyword** is a word that JavaScript has reserved for its own syntax. You **cannot** use it as an identifier.

### Common keywords you'll use daily

| Keyword | What it does |
| --- | --- |
| `let` / `const` / `var` | Declare variables |
| `if` / `else` | Make decisions |
| `for` / `while` / `do` | Create loops |
| `function` | Define a function |
| `return` | Send a value back from a function |
| `class` | Define a class |
| `new` | Create an object from a class |
| `import` / `export` | Share code between files |
| `try` / `catch` / `finally` | Handle errors |
| `typeof` | Check the type of a value |
| `this` | Refer to the current object |
| `true` / `false` / `null` | Literal values (also reserved) |

### The full keyword list

```js
break      case       catch      class      const      continue
debugger   default    delete     do         else       export
extends    false      finally    for        function   if
import     in         instanceof let        new        null
return     super      switch     this       throw      true
try        typeof     var        void       while      with
yield
```

> `true`, `false`, and `null` are technically **literals**, not keywords, but they are reserved â€” you still can't use them as names.

### Why this trips people up

```js
let class = "math";   // âŒ SyntaxError â€” `class` is a keyword
let new = 10;         // âŒ SyntaxError â€” `new` is a keyword
let return = true;    // âŒ SyntaxError â€” `return` is a keyword

// But these are fine â€” `class` is not part of the name
let className = "math";
let newUser = "Alice";
```

## Keywords vs identifiers â€” side by side

| | Keyword | Identifier |
| --- | --- | --- |
| **Who creates it?** | JavaScript (fixed) | You (your choice) |
| **Can it be renamed?** | No | Yes |
| **Meaning** | Fixed, built-in | Whatever you define |
| **Example** | `let`, `if`, `function` | `age`, `greet`, `totalPrice` |

## Why this matters for Playwright

- You write identifiers constantly in test code: locators like `const loginButton = page.locator("#login");` â€” if you accidentally name one `delete`, `new`, or `return`, the test file fails before it even runs.
- Picking clear, consistent names (`submitButton`, `errorMessage`) makes your tests readable and easier to debug when a selector breaks.
- Understanding `const` (won't change) vs `let` (can change) helps you write stable, predictable test scripts.

