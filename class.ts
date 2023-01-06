class Employee {
    id: number;
    first: string;
    last: string;

    // every class needs a constructor. In TS, one constructor is allowed: the default (if none is
    // specified) or a user-defined constructor that will indicate the parameters to use
    constructor(id: number, first: string, last: string) {
        this.first = first;
        this.id = id;
        this.last = last;

        //the constructor calls the name method
        this.getFirstAndLast();
    } //end of constructor

    getFirstAndLast(): string {
        return `the full name is ${this.first} ${this.last} and the id is ${this.id}`;
    } // end of get name method
}


let Joe = new Employee(54054, 'Pica', 'Chu');
// Joe.id = 1029384756;
// Joe.first = "Joe";
// Joe.last = 'Man';

console.log(Joe);
console.log(`the first employee's name is ${Joe.first} and the employee's ID is ${Joe.id}`);


// console.log(`We now attempt to change the name of the existing object by using the constructor:`);