let lname = 'myLastName';
console.log(`\n\nin TS, the var lname has been init and assigned: ${lname}`);

// console.log(`\nif we attempted to re-assign the var 'lname', now we get an error`);
console.log(`\nHowever, if we re-assing the var lname (which is of type '${typeof lname}') with another string...`);
lname = 'wolverine';
lname = lname.charAt(0).toUpperCase() + lname.substring(1).toLowerCase();
console.log(`\nNow, we renamed 'lname' to: '${lname}' (and we made it proper upper case)`);
console.log(fullName('Jo', lname));


function fullName(s1: string, s2: string) :string {
    return `full name: ${s2}, ${s1}`;
}
