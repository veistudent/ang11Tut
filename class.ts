import { Address } from './interface';


/**
 * 
 * minute 1:59:08 --> IMPLEMENTING interfaces makes TS angry: not implementing properly.
 * 
 */
class Employee implements Address {
    // this is the syntax when a constructor is provided
    id: number;
    first: string;
    address: Address;

    // if the constructor is implicit, then each member variable would use this syntax:
    // id!: number;
    // first!: string;
    // last!: string;

    // every class needs a constructor. In TS, one constructor is allowed: the default (if none is
    // specified) or a user-defined constructor that will indicate the parameters to use
    constructor(id: number, first: string, address: {street: string, city: string, state: string, zip: number}) {
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
    getFirstAndAddress(): string {
        return `the name is ${this.first}, the id is ${this.id}, and address ${this.address}`;
    } // end of get name method
}


let Joe = new Employee(54054, 'Pica', {street: '123 Canton', city:'New York', state:'NY', zip: 21200});
// Joe.id = 1029384756;
// Joe.first = "Joe";
// Joe.last = 'Man';

console.log(Joe);
console.log(`the first employee's name is ${Joe.first} and the employee's ID is ${Joe.id}`);
console.log(`using the interface, we call the method in the Employee class: ${Joe.getFirstAndAddress()}`);


// console.log(`We now attempt to change the name of the existing object by using the constructor:`);