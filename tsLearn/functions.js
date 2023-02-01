var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(num1, num2) {
    return num1 + num2;
}
console.log("this function adds two numbers: ".concat(add(2, 6)));
var numbers = [8, 7, 6, 5, 4, 3, 2];
//
function addMany(n1, n2) {
    var n3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        n3[_i - 2] = arguments[_i];
    }
    return n1 + n2 + n3.reduce(function (a, b) { return a + b; }, 0);
    // return n1 + n2 + n3.reduce(function(a,b) {
    //     return a + b;
    // });
}
console.log("the sum of elems in array ".concat(numbers, " (plus 1 and 2) is: ").concat(addMany.apply(void 0, __spreadArray([1, 2], numbers, false))));
