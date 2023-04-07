"use strict";
exports.__esModule = true;
var startTime = Date.now();
console.log("start time: ".concat(startTime));
var rating = 0;
var elems = [];
for (var index = 0; index < 3000; index++) {
    elems.push(Math.floor(Math.random() * 6));
    rating += elems[index];
}
var endTime = Date.now();
console.log("end time is: ".concat(endTime));
console.log("the sum of all ratings: ".concat(rating));
console.log("the average of ratings: ".concat(rating / 3000));
console.log("time to complete the loop: ".concat(endTime - startTime));
