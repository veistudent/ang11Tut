"use strict";
// 2:05:05 --> just finished object destructuring
exports.__esModule = true;
// this is an example of an instance variable that uses the interface User as its type
var testUserInter = {
    name: "Moe",
    id: 2345,
    email: "moe@gmail.com"
};
console.log();
console.log("the type of the instance variable 'testUserInter is ".concat(typeof testUserInter));
//after extending an interface, we may create an instance variable of type of the extended interface
var extendedInterfaceUser = {
    name: "Pepe",
    age: 44,
    id: 2346,
    email: "",
    salary: 155000
};
console.log("the age of extendedInterfaceUser is ".concat(extendedInterfaceUser.age));
//this is an array that uses the interface as its type class
var _a = [
    { name: "John", id: 2347, email: "ab@gmail.com", salary: 190000 },
    { name: "Wick", age: 45, id: 2348, email: "Jwick@gmail.com", salary: 195000 },
    { name: "Ron", id: 2349, email: "ron@gmail.com", salary: 170000 },
    { name: "Hermanie", id: 3490, email: "her@gmail.com", salary: 170000 },
    { name: "Pick", id: 4901, email: "pick@gmail.com", salary: 185000 }
], John = _a[0], Wick = _a[1], users = _a.slice(2);
// console.log(`the user named 'John' is ${John} and has a type of ${typeof John}`);
console.log(John);
// console.log(`the user named 'Wick' is ${Wick}`);
console.log(Wick);
// console.log(`the rest of the users are stored in an array of type ${typeof users} \n whose val is:\n${users}`);
console.log(users);
// to filter a value from an array
var filterBySalaryGreater100k = users.filter(function (user) { return user.salary > 100000; });
console.log('users from \'users\' who earn more than 100k:');
console.log(filterBySalaryGreater100k);
