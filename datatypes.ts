let lname = 'myLastName';
console.log(`in TS, the var lname has been init and assigned: ${lname}`);

console.log(`if we attempted to re-assign the var 'lname', now we get an error`);
console.log(`However, if we re-assing the var lname (which is of type ${typeof lname})`);
lname = 'hahaha';
console.log(`Now, we renamed 'lname' to: ${lname}`);