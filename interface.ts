export interface User {
    // interfaces are used to create custom data structures outside of those established
    // by the class
    name: string;
    age: number;
    id: number;
    email: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}