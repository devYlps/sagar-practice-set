// Sr.no 1  :  (1) program to read 4 elements in 1D  array and display it
// var name = ['sagar', 'savan',  'Akash"', 'Badal']

// const name = ["sagar", "savan",  "Akash", "Badal"];
// for (let i = 0; i < name.length; i++) {
//   document.write(name[i] + '<br />')
// }

// (2) Write  a  program  to  read  4  elements  in  2D  array  and  display  in matrix form.
// const num = [ [1,2], [5,6]];
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
//     for(let j=0; j<num.length; j++){
//         document.write(" "+num[i][j]);
//     };
//     document.writeln("<br/>")
// }

// 2. (a) Write a program to copy elements of one array to another.
// const num = [1, 11, 25, 2526];

// const num2 = num;
// document.write(num2);

// b) Write a program to calculate sum of array elements.
// const num= [1, 2, 3, 25, 10]
// var sum = 0;
// for(let i=0; i < num.length; i++){
// 	sum += num[i];
// }
// document.write(sum)
// console.log(sum);

// c)  Write  a  program  to  find  out  minimum  and  maximum  number  from 1D array.
// const num = [1, 2, 3, 25, 10];
// console.log(Math.min.apply(Math, num));
// console.log(Math.max.apply(Math, num));

// a) Write a program to search an element from an array.
// const num = [1, 2, 3, 25, 10];
// console.log(num[2]);

// b) Write a program to insert an element in array at particular position.
    // const num = [1, 2, 3, 25, 10];
    // num[2] = 2000;
    // num.splice(2, 0, 20) //num.splice(2, 0, 20)  2 index loaction  and 20 tya put karvanu  0 value spilce nai kare 
    // console.log(num);


//   c)  Write a program to delete an element in array at particular position.
// const num = [1, 2, 3, 25, 10];
// console.log(num.splice(1));

// 4. a) Write a program to sort an array in ascending and descending order.
// Ascending
// const num = [1, 2, 3, 25, 10];
// num.sort(function(a, b){
//     return a - b
// })
// console.log(num);
// function a-b genrate ascending order same as a -b generate descending order.

// Descending order.
// const num2 = [1, 5, 3, 25, 10];
// num.sort(function(a, b){
//     return b - a
// })
// console.log(num);

//5.  a) Write a program to find length of the string and display on terminal. 
// const collage = "Maliba Collage";
// console.log(collage.length);


// b)  Write  a  program  to  copy  one  string  to  another  and  display  on terminal. 
// const collage = "Maliba Collage";
// const coll2 = collage;
// console.log(coll2);

// c) Write a program to compare two strings and display on terminal.
// let name1 = "Sagar";
// let name2 = "Savan";

// if (name1 === name2){
//     console.log("the String is equal");
// }else {
//     console.log("The String in not equal");
// }

// 7 a)  Write  a  program  to  demonstrate  the  use  of  string  
// manipulation handling functions (strlen, strcpy, strcat, strcmp). 
// in javascript 1.Concat()
// let name1 = "Sagar";
// let name2 = "Savan";
// console.log(name1.concat(" " + name2));
// name3 = name1 //  copy string
// console.log(name3);
// console.log(name1);

//8. a) Write a program using user-defined function for addition of N numbers.
//  let num = parseInt(prompt("Enter the number"));
//  let sum = 0;
//  for (i = 1; i<=num; i++){
//     // sum = sum+1;
//     sum += i; 
//  }
//  document.write(sum);
//  console.log(sum);

// b)  Write  a  program  using  user-defined  function  which  accepts  two 
// arguments and return the power of them.
// let x = 2;
// let n = 3;

// function power(x, y){
//     return parseInt(Math.pow(x, n))
// }
// console.log(power(x, n));

// c)  Write  a  program  using  user-defined  function  which  calculates  area of circle.
// const pi = 3.14;
// function circleArea(r){
//     return pi * r * r; 
// }
// let r = parseInt(prompt("Enter circle redius to get Circle Area"))
// console.log(" Area of circle is " + circleArea(r));
// document.write(" Area of circle is " + circleArea(r));

// 9. Write  a  program  using  user-defined  function  which  finds  the  sum  of 
// digits of a number using recursion.
// function sum(num){
//     if(num === 0){
//         return 0
//     }
//     return num%10 + Math.floor(sum(num/10))
// }
// console.log(sum(125));

// 10. Define a structure called time_struct containing three members integer
// hour, integer minute and integer second. Develop a program that
// would assign values to individual members and display the time in the following formate
// const hour = 12;
// const minute = 30;
// const second = 45;
// console.log(`Time: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`);

//11.  Define a structure called bank containing account no., holder name and
// balance  and  display  them  for  N  holders  whose  balance  is  less  than
// 5000.
// // Sample bank account data
// const accounts = [
//     { accountNo: 1234, holderName: 'sagar', balance: 4000 },
//     { accountNo: 5678, holderName: 'sem', balance: 5500 },
//     { accountNo: 9876, holderName: 'sid', balance: 3000 },
// ];
// // Display accounts with balances less than 5000
// console.log('Bank accounts with balance less than 5000:');
// for (const account of accounts) {
//     if (account.balance < 5000) {
//         displayAccountInfo(account);
//     }
// }
// //function to display bank account information
// function displayAccountInfo(account) {
//     console.log(`Account No.: ${account.accountNo}`);
//     console.log(`Holder Name: ${account.holderName}`);
//     console.log(`Balance: ${account.balance}`);
//   }

//12. Define a structure called student_record containing name, date of birth
// and total marks obtained. Use the date structure to represent the date
// of birth. Develop a program to read data for 10 students in a class and
// list them rank-wise.

// 17 a) Write a program to create a file and check whether exist or not.
// const fs = require("fs");
// //create file
// fs.writeFileSync("sample.txt", "hello guys");
// const path = './sample.txt'

// // See if the file exists
// try {
//     if (fs.existsSync(path)) {
//       //file exists
//       console.log("file Exist")
//     }
//   } catch(err) {
//     console.error(err)
//   }
// b) Write a program to read the content of a file and display it on
// terminal.
// const fs = require("fs");
// //read file
// const display_file = fs.readFileSync("sample.txt");
// wordma = display_file.toString();
// console.log(wordma);

//18. a) Write a program to read content of a file and append the same
// content in another file.
// const fs = require("fs");
// const display_file = fs.readFileSync("sample.txt");
// fs.appendFileSync("sample.txt", " , thank you for coming");
// wordma = display_file.toString();
// console.log(wordma);
// fs.writeFileSync("text.txt", wordma);

// b) Write a program to copy the content of source file into destination
// file.
// const fs = require("fs");

// const src = "sample.txt";
// const dest = "copyFile.txt";

// fs.copyFile(src, dest, (error) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("Copied Successfully!");
// });