// basics of javascript again 

// comment like thias 
/* or like this */

// variable
// intialization
// let sagar; // intialiaze sagar variable 
// sagar = "hello World"; // i decleare string in this variable 
// let z = "sagar"
// let y = 10;

// // const c; // this throw you error 
// const c = 25; // const variable always declear when its intialize
// console.log(c);// this is how you call console the (massage)

// data types in javascript
// number // or integer
// String
// Boolean
// undefined
// null
// Object

//**********Operator** */

//1. JS Arithmetic Operators
// let y = 5;
// Opreator        decription      example         result
// +                  addition         x =y+2          x = 7
// -                  subtraction      x =y-2          x = 3
// *                  Multiplication   x =y*2          x = 10
// /                  Division         x =y/2          x = 2.5
// %                  modulus          x =y%2          x = 1
// ++                  increment        x =++y         x = 6
// --                  dicrement        x =-y           x = 4

// Assignment Opreators
// =	Assignment operator	       a = 7; // 7
// +=	Addition assignment	       a += 5; // a = a + 5   a =12
// -=	Subtraction Assignment	   a -= 2; // a = a - 2    a = 5
// *=	Multiplication Assignment  a *= 3; // a = a * 3     a = 21
// /=	Division Assignment	       a /= 2; // a = a / 2     a = 3.5
// %=	Remainder Assignment	   a %= 2; // a = a % 2     a = 2
// **=	Exponentiation Assignment  a **= 2; // a = a**2    

// JS COmparision Opretors 
// let x = 5;
// ==      is equal to                      x == 8 is false
// ===     is exactly equal to               x === 5 is true, x === "5" is false
/* !=      is not equal                         x != 8 is true */
// >      	is greater than                          x>8 is false
// <      	is less than                             x< 8 is true
// >=      is greater than or equal to             x>=8 is false
// <=      is less than or equal to                 x<=8 is true

// JS Logical Operators
// let x = 6 , y=3;
// &&      and         (x < 10 && y > 1) is true
// ||      or          (x==5 || y==5) is false
/* !       not         !(x==y) is true */ 

// JS Conditional Operator
// condition ? expression1 : expression2
// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.
// program to check pass or fail
// let marks = prompt('Enter your marks :');
// // check the condition
// let result = (marks >= 40) ? 'pass' : 'fail';
// console.log(`You ${result} the exam.`);


// Decision making with if, if…else statement, Nesting of if…else, 
// else…if ladder, switch statement, Conditional operator, goto 
// statement. 

// 1. if statement
    // if(condition){
    //     //logic or body of if
    // }
// check if the number is positive
// const number = prompt("Enter a number: ");
// const number = -5;

// // check if number is greater than 0
// if (number > 0) {
//  // the body of the if statement
//   console.log("The number is positive");
// }
// console.log("The if statement is easy");

// if…else statement
// const number = prompt("enter number and check if its posative or nanagetive: ")
// if(number > 0){
//     console.log("positive");
// }else{
//     console.log("nagative");
// }


// Nested if...else Statement
// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");
// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }

// if else ladder
// let x = 10;
// if (x > 15) {
//   console.log("x is greater than 15");
// } else if (x > 10) {
//   console.log("x is greater than 10 but less than or equal to 15");
// } else if (x > 5) {
//   console.log("x is greater than 5 but less than or equal to 10");
// } else {
//   console.log("x is less than or equal to 5");
// }

// Switch statement
// switch (expression) {
//     case value1:
      // code to be executed if expression == value1
//       break;
//     case value2:
      // code to be executed if expression == value2
//       break;
//     default:
      // code to be executed if expression does not match any of the values
//   }

// let x = 5;
// switch (x) {
//   case 2:
//     console.log("x 2 is an apple");
//     break;
//   case 4:
//     console.log("x 4 is a banana");
//     break;
//   case 5:
//     console.log("x 5 is an orange");
//     break;
//   default:
//     console.log("x is something else");
// }

// Decision Making and Looping:
// while loop
// while (condition) {
//     // code to be executed
//   }
// let a = 1;
// while (a <= 100) {
//     console.log(a);
//     a+= a;
//   }

// for loops
// for(intialization; condtion; increament){
    // body or logic 
// }
// for(let a=0; a <100; a++) {
//     console.log(a+1)
// }

// For-in loop
// for (variable in object) {
    // code to be executed
//   }
  
// let person = {
//     name: "sagar",
//     age: 24,
//     job: "developer"
//   };
  
//   for ( key in person) {
//     console.log(key + ": " + person[key]);
//   }

//   For-of loop
// for (variable of object)  {
    // code to be executed
//   }
// let numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }
// Nested loop
// for(let i=1; i<=100; i= i+10){
//     for(let j=i; j< i+10 ; j++){
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }

// Break and Continue statment in loops
// for(let i=1; i<=5; i++){
//     if(i==3){
//         break;
//     }
//     console.log(i)
// }

// for(let i=1; i<=5; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }

/*********** Array in JS ******************/
// Arrays help maintain large sets of data under a single 
// variable name to avoid confusion that can occur when using several variables
// this is 1D Array
// const x=[1,2,11,3,5,6,98,9,16,61]
// const names=["sagar", "savan", "rakesh"];

//2D Array in js same as multi dimentional
// const x = [[1,2], [2,5], [3,6]]
// const y = [["sagar",2], ["savan",5], ["rakesh",6]]

/******Strings in JS************** */
// const name= "sagar";
// let newName; // intializatuion 
// newName = "babubhai" // decleare the string
// we can write string in double coughts and single coughts also
// Method	Description
// charAt(index)	        returns the character at the specified index
// concat()	                joins two or more strings
// replace()	            replaces a string with another string
// split()	                converts the string to an array of strings
// substr(start, length)	returns a part of a string
// substring(start,end)	    returns a part of a string
// slice(start, end)	    returns a part of a string
// toLowerCase()	        returns the passed string in lower case
// toUpperCase()	        returns the passed string in upper case
// trim()	                removes whitespace from the strings
// includes()	            searches for a string and returns a boolean value
// search()	                searches for a string and returns a position of a match

/********Functions************* */
// function hello(){
//     console.log("hello there")
// }
// hello();

/************PRACTICALS************ */
//1. b) Write a program to print "Hello World". 
// document.write("Hello World!")
// d) Write a program to take input from command line arguments and 
// print it on screen. 
// const number = prompt("Enter a number: ");
//  document.write("You entered number "+ number);

//2.a) Write a program to take two numbers from user and print its 
// addition and subtraction on screen. 
// const a = parseInt(prompt('Enter the first number '));
// const b = parseInt(prompt('Enter the second number '));
// function adsum (a, b){
//     let c = a+b;
//     document.write("You entered number "+ c);
// };
// adsum(a, b);
// c) Write a program to swap values of two variables without using 
// third variable. 

// let X= 25 //(First number)
// let Y= 23 //(second number)

// X = X + Y = 25 +23 = 48
// Y = X - Y = 48 - 23 = 25
// X = X -Y = 48 - 25 = 23

// 3.a) Write a program to find area of circle. 
const pi = 3.14;
const r = parseInt(prompt('Enter the radious of cicle '));
function areaOfCircle(r){
    let carea= pi * r *r;
    document.write(carea)
};
areaOfCircle(r);