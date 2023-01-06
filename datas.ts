// practice

let list01 = ['a','b','c', 'd','g'];
let arr01 = Array<number>;  // 'number' is a type --> an int, that is used to indicate how many elems the array will possess
console.log(list01);
console.log(typeof arr01);

let num01: number = 33;
let num02 = -21;
console.log(typeof num01);
console.log(typeof num02);
let str01: string = 'laugh';
console.log(num01 - num02);
console.log(`str01 is of type: ${typeof str01}`);
console.log(`the ${typeof str01} 'str01 has a value of: ${str01}`);

//now, we try the 'any' type of data variable
let someVar: any;   // always try to avoid 'any' and use the correct data types.
someVar = 'this is a string';
console.log(`the var 'someVar' initially has a value of: ${someVar}`);
someVar = 32 + 90;
console.log(`now, 'someVar' has a number value of: ${someVar}`);