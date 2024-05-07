"use strict";
//Strongly typed language///////////////////////////                      
/*
let x: number = 45;
console.log(x);
*/
//error/////////////////////////////////////////////                       
/*
x = "hello";
console.log(x);
*/
//Functions argumets////////////////////////////////                       
/*
function greet(firstName: string, lastName: string) {
    console.log("Hello "+ firstName, lastName);
}
greet("Ayush", "Raj");
*/
//sum function - return type////////////////////////
/*
function sum(a: number, b: number): number {
    return a + b;
}
const value = sum(4, 5);
console.log(value);
*/
//Function to return boolean////////////////////////                       
function isLegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
let result = isLegal(21);
console.log(result);
