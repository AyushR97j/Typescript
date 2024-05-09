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
/*
function isLegal(age: number): boolean {
  if (age >= 18) return true;
  else return false;
}

let result: boolean = isLegal(21);
console.log(result);
*/

//Function as an argument////////////////////////////

//Function that takes another function as input,
//& runs it after 1 second

//Normal JS function :
//gives error :
//Parameter 'fn' implicitly has an 'any' type.
/*
function runAfter1sJS(fn) {
    setTimeout(fn, 1000);
}
runAfter1sJS( function() {
    console.log("Javascript function");
})
*/
//Typescript Function for same :
/*
function runAfter1sTS(fn: () => void) {
    setTimeout(fn, 1000);
}
runAfter1sTS( function() {
    console.log("Typescript function");
})
*/

//Interfaces//////////////////////////////

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string
};

function isLegal(user: User) {
    if(user.age > 18) {
        console.log("user is 18+");
    }
    else {
        console.log("user is not 18+");
    }
}

isLegal({
    firstName: "Ayush",
    lastName: "Raj",
    age: 21
})

