import { Address, User, UserEmployee } from './interface';    //the extension of the interface class is not specified


/**
 * 
 * minute 1:59:08 --> IMPLEMENTING interfaces makes TS angry: not implementing properly.
 * 
 */
class Employee implements Address {
    
    /** adding properties */ 
    // this is the syntax when a constructor is provided
    // if a constructor is provided (manually added: known as 'parameterized' constructor), then there should be a '!' after the name of the variable property
    private id: number;     /**the private keyword was replaced by the hash tag '#' in JS and Angular 11 onward */
    // # is the native manner to create private variables in JS
    first: string;
    address: Address;

    /*********************************************************** */
    // if the constructor is implicit (not manually entered), then each member variable would use this syntax:
    // id!: number;
    // first!: string;
    // last!: string;

    // every class needs a constructor. In TS, one constructor is allowed: the default (if none is
    // specified) or a user-defined constructor that will indicate the parameters to use
    constructor(id: number, first: string, address: {street: string, city: string, state: string, zip: number}) {
        this.first = first;
        this.id = id;
        this.address = address;
        //address like an object... could be better implemented as an interface implemented by the class
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
    getFirstAndAddress(): string {      /**non-parameterized method; returns type String */
        return `the name is ${this.first}, the id is ${this.id}, and address ${this.address}`;
    } // end of get name method

    
    getId(): number { return this.id; }
    setId(id:number) { this.id = id; }

    getFirst(): string { return this.first; }
    setFirst(first: string) { this.first = first; }

    getAddress(): Address { return this.address; }
    setAddress(address: Address) { this.address = address; }
    
}


let Joe = new Employee(54054, 'Pica', {street: '123 Canton', city:'New York', state:'NY', zip: 21200});
// Joe.id = 1029384756;
// Joe.first = "Joe";
// Joe.last = 'Man';

console.log(Joe);
console.log(`the first employee's name is ${Joe.first} and the employee's ID is ${Joe.id}`);
console.log(`using the interface, we call the method in the Employee class: ${Joe.getFirstAndAddress()}`);


// console.log(`We now attempt to change the name of the existing object by using the constructor:`);

/** we may extend the class above by creating another class */
class Manager extends Employee implements UserEmployee {
    
    name: string;
    age?: number | undefined;
    id: number;
    email: string;
    salary: number;


    
    // constructor parameters must be typed
    constructor(id: number, first: string, address:{street: string, city: string, state: string, zip: number}) {
        super(id, first, address);
    }
    

    //method for the inherited class
    getFirstAndAddress() {
        return `the first is ${this.first} and the address is ${this.address}`;
    }
}