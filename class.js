"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    // if the constructor is implicit, then each member variable would use this syntax:
    // id!: number;
    // first!: string;
    // last!: string;
    // every class needs a constructor. In TS, one constructor is allowed: the default (if none is
    // specified) or a user-defined constructor that will indicate the parameters to use
    function Employee(id, first, address) {
        this.first = first;
        this.id = id;
        this.address = address;
        // this.address = {
        //     address.street,
        //     address.city,
        //     address.state,
        //     address.zip
        // }
        // this.address.street = address.street;
        // this.address.city = address.city;
        // this.address.state = address.state;
        // this.address.zip = address.zip;
        // this.address = {street: address.street, city: address.city, state: address.state, zip: address.zip};
    } //end of constructor
    /**method to get the  */
    Employee.prototype.getFirstAndAddress = function () {
        return "the name is ".concat(this.first, ", the id is ").concat(this.id, ", and address ").concat(this.address);
    }; // end of get name method
    return Employee;
}());
var Joe = new Employee(54054, 'Pica', { street: '123 Canton', city: 'New York', state: 'NY', zip: 21200 });
// Joe.id = 1029384756;
// Joe.first = "Joe";
// Joe.last = 'Man';
console.log(Joe);
console.log("the first employee's name is ".concat(Joe.first, " and the employee's ID is ").concat(Joe.id));
console.log("using the interface, we call the method in the Employee class: ".concat(Joe.getFirstAndAddress()));
// console.log(`We now attempt to change the name of the existing object by using the constructor:`);
