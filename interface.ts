// 2:05:05 --> just finished object destructuring

// this is how an interface is created/generated
export interface User {
    // interfaces are used to create custom data structures outside of those established
    // by the class
    name: string;
    age?: number;
    id: number;
    email: string;
} 

//this is how an interface may be extended.
export interface UserEmployee extends User {
    salary: number;
}

// this is another interface whose properties makes the interface like an object
export interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}

console.log();

// yet another interface that contains a built-in method returning a type of another interface
interface Login {
    //method within the Login interface that returns a type
    login(): User;  //the definition of this method will be made by the calling class
}

// this is an example of an instance variable that uses the interface User as its type
let testUserInter: User = {
    name: "Moe",
    id: 2345,
    email: "moe@gmail.com"
}

console.log(`the type of the instance variable 'testUserInter is ${typeof testUserInter}`);

//after extending an interface, we may create an instance variable of type of the extended interface
let extendedInterfaceUser: UserEmployee = {
    name: "Pepe",
    age: 44,
    id: 2346,
    email: "",
    salary: 155000
};

console.log(`the age of extendedInterfaceUser is ${extendedInterfaceUser.age}`);

//this is an array that uses the interface as its type class
let users: UserEmployee[] = [
    {name: "John", id: 2347, email: "ab@gmail.com", salary: 150000},
    {name: "Wick", age: 45, id: 2348, email: "Jwick@gmail.com", salary: 160000},
    {name: "Ron", id: 2349, email: "ron@gmail.com", salary: 170000}

];
console.log(`the type for user named 'users' is ${typeof users}`);