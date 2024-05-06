"use strict";
let x = 45;
console.log(x);
//error/////////////////////////////////////////////                       
/*
x = "hello";
console.log(x);
*/
////////////////////////////////////////////////////                       
//Functions argumets////////////////////////////////                       
function greet(firstName, lastName) {
    console.log("Hello " + firstName, lastName);
}
greet("Ayush", "Raj");
////////////////////////////////////////////////////                       
//sum function - return type////////////////////////
function sum(a, b) {
    return a + b;
}
const value = sum(4, 5);
console.log(value);
