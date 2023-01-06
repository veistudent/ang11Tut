// practice
var list01 = ['a', 'b', 'c', 'd', 'g'];
var arr01 = (Array); // 'number' is a type --> an int, that is used to indicate how many elems the array will possess
console.log(list01);
console.log(typeof arr01);
var num01 = 33;
var num02 = -21;
console.log(typeof num01);
console.log(typeof num02);
var str01 = 'laugh';
console.log(num01 - num02);
console.log("str01 is of type: ".concat(typeof str01));
console.log("the ".concat(typeof str01, " 'str01 has a value of: ").concat(str01));
//now, we try the 'any' type of data variable
var someVar; // always try to avoid 'any' and use the correct data types.
someVar = 'this is a string';
console.log("the var 'someVar' initially has a value of: ".concat(someVar));
someVar = 32 + 90;
console.log("now, 'someVar' has a number value of: ".concat(someVar));
