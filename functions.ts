function add(num1: number, num2: number) : number { //the last ': number' means that it returns a number
    return num1 + num2;
}

console.log(`this function adds two numbers: ${add(2,6)}`);

let numbers = [8,7,6,5,4,3,2];
//
function addMany(n1: number, n2: number, ...n3: number[]): number {
    return n1 + n2 + n3.reduce((a,b) => a+ b, 0)
    // return n1 + n2 + n3.reduce(function(a,b) {
    //     return a + b;
    // });
}

console.log(`the sum of elems in array ${numbers} (plus 1 and 2) is: ${addMany(1, 2, ...numbers)}`);