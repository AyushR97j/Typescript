let x: number = 45;
console.log(x);

//error/////////////////////////////////////////////                       
/*
x = "hello";
console.log(x);
*/
////////////////////////////////////////////////////                       

//Functions argumets////////////////////////////////                       
function greet(firstName: string, lastName: string) {
    console.log("Hello "+ firstName, lastName);
}
greet("Ayush", "Raj");
////////////////////////////////////////////////////                       

//sum function - return type////////////////////////
function sum(a: number, b: number): number {
    return a + b;
}
const value = sum(4, 5);
console.log(value);