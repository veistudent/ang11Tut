"use strict";
exports.__esModule = true;
console.log();
// this is an example of an instance variable that uses the interface User as its type
var testUserInter = {
    name: "Moe",
    id: 2345,
    email: "moe@gmail.com"
};
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
var users = [
    { name: "John", id: 2347, email: "ab@gmail.com" },
    { name: "Wick", id: 2348, email: "Jwick@gmail.com" },
    { name: "Ron", id: 2349, email: "ron@gmail.com" }
];
console.log("the type for user named 'users' is ".concat(typeof users));
