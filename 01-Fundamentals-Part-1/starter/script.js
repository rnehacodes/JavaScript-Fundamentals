
//Introduction
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~INTRODUCTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('Hello World');
let js = "javascript";
if (js == "javascript") alert("JavaScript is Cool");

n = 40 + 8 + 2;
console.log(n);

console.log('jonas');

let firstName = 'Bob';
console.log(firstName);

let country = 'India';
let continent = 'Asia';
let population = '141.72 crores';

console.log(country);
console.log(continent);
console.log(population);


//Values & Variables
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~Values & Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = false;
console.log(javascriptIsFun);

javascriptIsFun = 'Yes';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof null);


//let vs const vs var
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~let vs const vs var~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
let letVariable;
letVariable = 'This variable did not have a value at the time of initialization, but now it HAS!!!';
console.log(letVariable);

letVariable = true;
console.log(letVariable);

letVariable = 56789;
console.log(letVariable);
console.log(typeof letVariable);

const PI = 3.14;
console.log(PI);
console.log(typeof PI);

//Operators
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Operators~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
//Assignment & Basic Arithmetic Operators
let sum = 3 + 5;
let product = 90 * 30;
let exponentiation = 4 ** 4;

console.log('Sum: ' + sum + ', Product: ' + product + ', Exponentiation: ' + exponentiation);

//Comparison Operators
let x = 10, y = 'abc', z = 30;
console.log(x < z);
x += 40;
console.log(x < z); 

//String & Template Literals
console.log('~~~~~~~~~~~~~~~~~~~~~~~~String & Template Literals~~~~~~~~~~~~~~~~~~~~~~~~')
const myName = 'Neha';
const Age = 22;
const job = 'Software Engineer';
const output = "Hi I'm " + myName + ", a " + Age + "yrs old " + job;
console.log(output)

const output2 = `Take #2 : Hi I am ${myName}, a ${Age} years old ${job}.`
console.log(output2)

console.log('Normal Zindagi \n line 1 \n line 2 \n line 3');
console.log(`Mentos zindagi
line 1.....
line 2.....
line 3.....`)

//Conditions
console.log('~~~~~~~~~~~~~~~~~~~~~~~~Conditions~~~~~~~~~~~~~~~~~~~~~~~~')
const ageOfAnne = 11;
const isAnneEligible = ageOfAnne >= 18;
if(isAnneEligible == true) {
    console.log('Anne can get a driving license 😃');
} else {
    let yearsLeft = 18 - ageOfAnne;
    console.log(`Anne cannot get a driving license 😐
    But, she can get one after ${yearsLeft} years`);
}

const ageOfJohn = 67;
const isJohnEligible = ageOfJohn >= 18;
if(isJohnEligible == true) {
    console.log('John can get a driving license 😃');
} else {
    let yearsLeft = 18 - ageOfJohn;
    console.log(`John cannot get a driving license 😐
    But, she can get one after ${yearsLeft} years 😃`);
}


//Type Conversion & Coercion
const birthYear = '2002';
console.log(birthYear, 14);
console.log("Without type conversion: " + birthYear + 14);
console.log(Number(birthYear), birthYear);
console.log("With type conversion: "  + (Number(birthYear) + 14));

console.log(Number('test string conversion'));
console.log(String(15), 15);
console.log('25' - '5' + 10);
console.log('50' * '5');