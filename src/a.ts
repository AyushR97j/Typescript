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
/*
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
*/

//Types////////////////////////////////////
/*
type User = {
    firstName: string;
    lastName: string;
    age: number;
}

//Union
type GreetArg = number | boolean | string;

function greet(id: GreetArg) {
    console.log(id);
}

greet(1);
greet("1");
greet(true);

//Intersection
type Employee = {
    name: string;
    startDate: Date;
};
interface Manager {
    name: string;
    department: string;
};

type TechLead = Employee & Manager; 

const t: TechLead = {
    name: "Ayush",
    startDate: new Date(),
    department: "CS & IT",
}*/

//Arrays in TS/////////////////////////////

function maxValue(arr: number[]) {
    let maxNum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
let maxVal = maxValue([1,3,7,4,8,5]);
console.log("max value is : ", maxVal);