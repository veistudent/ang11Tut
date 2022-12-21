var lname = 'myLastName';
console.log("in TS, the var lname has been init and assigned: ".concat(lname));
console.log("\nif we attempted to re-assign the var 'lname', now we get an error");
console.log("\nHowever, if we re-assing the var lname (which is of type ".concat(typeof lname, ")"));
lname = 'hahaha';
console.log("\nNow, we renamed 'lname' to: ".concat(lname));
