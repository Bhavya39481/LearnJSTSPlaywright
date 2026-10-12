// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------

console.log("" == 0); // // true, "" coerced to Number → 0
console.log("0" == 0);  // true, "0" coerced to Number → 0
console.log("" == "0"); // false, both strings, compared as-is
// (transitivity broken) -> coerced


// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log("5" + 2);

let a = "shirt"*3;
console.log(typeof a);

console.log(typeof "shirt"*3); //same the value is stored in a 

const name = "Ravi";
console.log('Hello ${name}');



console.log(null === undefined);
console.log(null == undefined);

const parsed = Number("abc");
console.log(parsed === NaN);

let a1 = 34;
let result = a1++;
console.log(result);
console.log(a1);

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

console.log(apiUrl);
let apiUrl = "/login";

if (true) {
  var retries = 3;
  let timeout = 5000;
}
console.log(retries);
console.log(timeout);