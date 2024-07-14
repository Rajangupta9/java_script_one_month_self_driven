// Activity 1 : Variable Declaration

//Task 1: Declare a variable using 'var', assign it a number, and log the value to the console.

var num = 42;
console.log(num);
//Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let st = 'rajan';
console.log(st);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const myboolean = true;
console.log(myboolean);

//Activity 3: Data Types
//Task 4: Create variables of different data types and log each variable's type using the typeof operator.
let numberVar= 123;
let stringVar= 'rajan';
let booleanVar = false;
let objectVar = {name: 'rajan', age:22};
let arrVar = [1,2,3,4,5];

console.log(typeof numberVar);  // output: number
console.log(typeof stringVar);  // output: string
console.log(typeof booleanVar); // output: boolean
console.log(typeof objectVar);  // output: object
console.log(typeof arrVar);  //output: object

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let reassignableVar='Initial value';
console.log(reassignableVar); // output: Initial value

reassignableVar = 'new value';
console.log(reassignableVar); // output: new value;

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const immutableVar =100;
console.log(immutableVar); // output: 100

// Uncommenting the following line will cause an error
// immutableVar = 200;  // TypeError: Assignment to constant variable.