//numeric separators 

let million = 1_000_000;
let billion = 1_000_000_000;
let binarySep= 0b1010_0001_1000_0101;
let octalSep= 0o1_7_3;
let hexSep= 0xA_B_C_D_E_F;

console.log("million is:", million);
console.log("billion is:", billion);
console.log("binarySep is:", binarySep);
console.log("octalSep is:", octalSep);
console.log("hexSep is:", hexSep);

//BiGInt literals

let bigInt1= 1234567890123456789012345678901234567890n;
let bigInt2= 0x1fffffffffffffn;
let bigInt3= 0b11111111111111111111111111111111111111111111111111111n;
let bigInt4= 0o777777777777777777777n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("bigInt1 is:", bigInt1);
console.log("bigInt2 is:", bigInt2);
console.log("bigInt3 is:", bigInt3);
console.log("bigInt4 is:", bigInt4);
console.log("big2 is:", big2);
console.log("bigFromNum is:", bigFromNum);