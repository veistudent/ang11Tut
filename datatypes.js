"use strict";
let lname = 'myLastName';
console.log(`\nin TS, the var 'lname' has been init and assigned: ${lname}`);
// console.log(`if we attempted to re-assign the var 'lname', now we get an error`);
console.log(`\nHowever, if we re-assing the var lname (which is of type ${typeof lname})`);
// lname : 'hahaha';
lname = 'wolverine';
console.log(`\nto the new string value of: ${lname}`);
lname = lname.charAt(0).toUpperCase() + lname.substring(1).toLowerCase();
console.log(`\nNow, we proper-cased 'lname' to: ${lname}`);
