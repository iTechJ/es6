console.log("************************ Map ******************************");

let testMap = new Map();
let strKey = "foo";
let fnKey = function () {};
let objKey = {};

testMap.set(strKey, "string key value");
testMap.set(fnKey, "function key value");
testMap.set(objKey, "object key value");

// получаем значения
console.log(`string : ${testMap.get(strKey)}`);
console.log(`function ${testMap.get(fnKey)}`);
console.log(`object: ${testMap.get(objKey)}`);

console.log("************************ Weak Map ******************************");

let testWeakMap = new WeakMap();
// testWeakMap.set(strKey, "string key value");/*error*/
testWeakMap.set(fnKey, "function key value");
testWeakMap.set(objKey, "object key value");

// получаем значения
// console.log(`string : ${testWeakMap.get(strKey)}`);
console.log(`function ${testWeakMap.get(fnKey)}`);
console.log(`object: ${testWeakMap.get(objKey)}`);

console.log("************************ Set ******************************");

let testSet = new Set();
testSet.add("one").add("two").add("three").add("one");
console.log(testSet);
console.log(testSet.has("one") === true);

console.log("************************ Weak Set ******************************");

let testWeakSet = new WeakSet();
let foo = {};
let bar = {};

testWeakSet.add(foo);
testWeakSet.add(foo);
testWeakSet.add(bar);

console.log(testWeakSet.has(foo));
console.log(testWeakSet.has(bar));
console.log(testWeakSet);
