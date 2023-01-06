var Employee = /** @class */ (function () {
    // every class needs a constructor. In TS, one constructor is allowed: the default (if none is
    // specified) or a user-defined constructor that will indicate the parameters to use
    function Employee(id, first, last) {
        this.first = first;
        this.id = id;
        this.last = last;
        //the constructor calls the name method
        this.getFirstAndLast();
    } //end of constructor
    Employee.prototype.getFirstAndLast = function () {
        return "the full name is ".concat(this.first, " ").concat(this.last, " and the id is ").concat(this.id);
    }; // end of get name method
    return Employee;
}());
var Joe = new Employee(54054, 'Pica', 'Chu');
// Joe.id = 1029384756;
// Joe.first = "Joe";
// Joe.last = 'Man';
console.log(Joe);
console.log("the first employee's name is ".concat(Joe.first, " and the employee's ID is ").concat(Joe.id));
// console.log(`We now attempt to change the name of the existing object by using the constructor:`);
