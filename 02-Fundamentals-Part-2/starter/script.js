'use strict';

// Strict Mode
let hasDriverLicense = false;
const testResult = true;

if (testResult == true) hasDriverLicense = true;
if(hasDriverLicense) console.log('Eligible to drive!');

// Functions
function output(msg) {
    console.log(msg)
}

output("Test output function #1")
output("Test output function #2")
output("Test output function #3")

function sum(a, b) {
    console.log('Numbers are :', a, b);
    return a + b;
}

const sum1 = sum(2, 6);
console.log('Sum is', sum1);

function multiply(a, b) {
    console.log('Numbers are :', a, b);
    return `The product is ${a*b}`;
}

let multiplication = multiply(6, 10);
console.log(multiplication)

///Function Declaration Vs Function Expression

//Function declaration
function sumTillN(n) {
    return (n * (n + 1)) / 2;
}

//Function expression
const square = function (n) {
    return n*n;
}

const a = 5;
console.log(sumTillN(a));

const b = square(4);
console.log(b);
console.log(square(b));

//Arrow Function
const diff2 = (a, b) => a-b;
const diff1 = diff2(90, 7);
console.log(diff1);

const isOdd = a => {
    if(a % 2 != 0) {
        return 'Yes';
    } else {
        return 'false';
    }
}

let num = 902134;
console.log(isOdd(num))

//Calling a function within function
const add = (a, b) => {
    return(a + b);
}

const diff = (a, b) => {
    return(a - b);
}

const product = (a, b) => {
    return(a * b);
}

const division = (a, b) => {
    return(a / b);
}

const arithmetics = (a, b) => {
    console.log(`The numbers are ${a} & ${b} and the results of their arithmetic operations are: `)
    console.log('Sum is ' + add(a, b));
    console.log('Difference is ' + diff2(a, b));
    console.log('Product is ' + multiply(a, b));
    console.log('Division is ' + division(a, b));
}

const operations = arithmetics(90, 10);

//Arrays
//Array Declaration : Way #1
const fruits1 = ['Apple', 'Banana', 'Orange', 'Kiwi'];

//Array Declaration : Way #2
const fruits2 = new Array('Guava', 'Pomegranate', 'Watermelon', 'Mango');

console.log("Array of Fruits");
console.log('1st List of fruits: ' + fruits1);
console.log('2nd List of fruits: ' + fruits2);

//Modifying array elements
fruits1[2] = 'Tomato';
fruits2[0] = 'Sapodilla';

console.log('After modification: \n' + fruits1 + '\n' + fruits2);

const id = 101, firstName = "John", lastName = "Doe", age = 22;
const employeeInfo = [id, firstName, lastName, age, fruits1];
console.log(employeeInfo.length + '\n' + employeeInfo);

//Array Operations
const yearOfJoining = [2020, 2024, 2019, 2021, 2015];
console.log(yearOfJoining)
const calcExperience = (year) => {
    let date = new Date();
    console.log(date);
    return date.getFullYear() - year;
}
const yearsOfExperience = new Array(yearOfJoining.length);
for(let i = 0; i < yearOfJoining.length; i++) {
    yearsOfExperience[i] = calcExperience(yearOfJoining[i]);
}
console.log(yearsOfExperience);

yearOfJoining.push(2029);
console.log(yearOfJoining);

yearOfJoining.unshift(2001);
console.log(yearOfJoining);

let popped = yearOfJoining.pop();
console.log(popped + '\n', yearOfJoining);

let shifted = yearOfJoining.shift();
console.log(shifted + '\n', yearOfJoining);

console.log(yearOfJoining.indexOf(2021))
console.log(yearOfJoining.includes(2029), yearOfJoining.includes(2015))

//Objects Intro
const nutrients = {
    protein : 'Paneer',
    carbohydrates : 'Potato',
    fat : 'Rice',
    viamtinC : 'Lemon'
}
console.log(nutrients)