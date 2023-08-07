//****ARRAY */
// 1. Declaration and intializtion of array
// const cars =["TATA", "MAHENDRA", "BMW"];
// cars[3]= "AUDI"
// console.log(cars);
// function user() {
//     var name, age, city ;
//     console.log("Enter your details:");
// }
// user()


// call by value and refrence in javascript
// var x = 50;
//  var y = x;

// //  y = 25;
//  console.log('x value: ' + x);
//  console.log('y value: ' + y);

//call by referance
// Array
// var a= [4 ,6];   /*a is an object*/
// b=[789]    /*b is also an object*/
 
// b.push(25);    
// console.log(b);

// Object
// const obj={
//     name: "sagar",
//     address:"chennai"};

// const obj2= obj;
// obj2.name = "lavan";

// console.log(obj2);

//nesting function

// function bike(x, y) {
//     console.log('this is my favoriet bike' + x );
//     model(x,y);
// }
// function model(x, y) {
//     console.log('i love this model R-' + y );
// }

// bike("yamaha", 15)
// function name(x,y) { /*x is my fist name and y is my surname*/

// console.log("my name is "+ x);
// surname(x,y);
// }
// function surname (x,y){
//     console.log("and "+ y + "is my surname");
// }
// name("Sagar", "Rathod");

//Structure in javascript
/* 1. premitive 
2. non premitive.

(1) primitvie
data types are : string, number, boolean, null, undefined.

(2) nonPrimtive 
data type: Array , object, function ext

*/
// Array of structure
//  var students = [1, 3, 4, 5, 25, 155]

 
//*********** 5. POINTERS ***** There is no POInters in javascript*** */


//*********** File Management in javascript************* */
//  const fs = require("fs");
//create new file
// fs.writeFileSync("text.txt", "Welcome in my World");
// fs.appendFileSync("text.txt", " thank you for coming");
// const show_File = fs.readFileSync("text.txt");
// wordma = show_File.toString();
// console.log(wordma);
