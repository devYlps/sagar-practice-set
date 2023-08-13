/******************OOPS WITH JAVASCRIPT************************* */
/***CLASS IN OOPS JS**********  */
// example of railway form
// class RailWayForm {               // class declear
//   constructor(adname, trainno){
//     console.log("CONSTRUCTOR CALLED..." + adname +  " " + trainno)
//     this.name = adname
//     this.trainno = trainno
//   }
//   submit() {                       //  methods in this class , method declear and its logic
//     alert(this.name + " your form is submit for train no: " + this.trainno);
//   }
//   cancel() {
//     alert(this.name + " your form is cancel for train no: " + this.trainno);
//   }
//   // fill(adname, trainno){
//   //   this.name = adname
//   //   this.trainno = trainno
//   // }
// }

// // create & fill form for sagar
// let sagarForm = new RailWayForm("Sagar", 143420);
// // fill the form with sagar deatails // now we dont need the fill method for fill
// // sagarForm.fill("Sagar", 143420)

// // create & fill form for rakesh
// let rakeshForm1 = new RailWayForm("rakesh", 143420);
// let rakeshForm2 = new RailWayForm("rakesh", 9211);
// // fill the form with sagar deatails
// // rakeshForm1.fill("rakesh", 143420)
// // rakeshForm2.fill("rakesh", 9211)

// // form submit 
// sagarForm.submit();
// rakeshForm1.submit(); 
// rakeshForm2.submit();
// rakeshForm1.cancel();

// this for more understanding of contructor in class of oops
// class RailWayForm {               // class declear
//   constructor(adname, trainno, address){
//     console.log("CONSTRUCTOR CALLED..." + adname +  " " + trainno)
//     this.name = adname
//     this.trainno = trainno 
//     this.address = address 
//   }
//   submit() {                       //  methods in this class , method declear and its logic
//     alert(this.name + " your form is submit for train no: " + this.trainno);
//   }
//   cancel() {
//     alert(this.name + " your form is cancel for train no: " + this.trainno);
//     this.trainno = 0
//   }
// }

// // create & fill form for sagar
// let sagarForm = new RailWayForm("Sagar", 143420);

// // create & fill form for rakesh
// let rakeshForm1 = new RailWayForm("rakesh", 143420);
// let rakeshForm2 = new RailWayForm("rakesh", 9211);

// // form submit 
// sagarForm.submit();
// rakeshForm1.submit(); 
// rakeshForm2.submit();
// rakeshForm1.cancel();

// inheritance 
// class Animal{
//   constructor(name, color) {
//     this.name= name
//     this.color = color
//   }
//   run(){
//     console.log(this.name + " is running")
//   }
// }

// class Monkey extends Animal {
//   eatbanana(){
//     console.log(this.name + " is eating banana")
//   }
// }
// let ani = new Animal("kilu", "gray")
// let mk = new Monkey("chinu", "dark radies")

// ani.run()
// mk.eatbanana()
// mk.run()

// ***********************mathod overriding
// class Employee{
//   constructor(name){
//     console.log(`${name}  Employee's constructor is here`)
//     this.name = name
//   }
//   login(){
//     console.log(`Employee has logged in`)
//   }
//   logout(){
//     console.log(`Employee has logged out`)
//   }
//   requestLeaves(leave){
//     console.log(`Employee has requested ${leave} leave`)
//   } 
// }
// class Programmer extends Employee{
//   constructor(name){
//     super(name)
//     console.log(`This is a newly written contructor`)
//   }
//   // constructor(....args){ -----> If there is no contructor in this child class, this is create automaticaly
//   //   super(..args)
//   // }
//   requestCOffee(x){
//     console.log(`Employee has request for ${x} coffee`)
//   }
//   requestLeaves(leave){                                   // this is method overriding for spacific
//     super.requestLeaves(leave)
//     console.log(`One extra is granted`)
//     // console.log(`Employee has ${leave + 1 } leave (one extra leave)`)
//   } 
  
// }

// let sagar = new Programmer ("sagar")
// sagar.login()
// sagar.requestLeaves(10)

// **********Contructor overriding*********
// class Employee{
//     constructor(){
//       console.log(`Employee's constructor is here`)
//     }
//     login(){
//       console.log(`Employee has logged in`)
//     }
//     logout(){
//       console.log(`Employee has logged out`)
//     }
//     requestLeaves(leave){
//       console.log(`Employee has requested ${leave} leave - Auto approved`)
//     } 
//   }
//   class Programmer extends Employee{
//     requestCOffee(x){
//       console.log(`Employee has request for ${x} coffee`)
//     }
//     requestLeaves(leave){                                   // this is method overriding for spacific
//       super.requestLeaves(leave)
//       console.log(`One extra is granted`)
//       // console.log(`Employee has ${leave + 1 } leave (one extra leave)`)
//     } 
    
//   }

// let sagar = new Programmer ()
// sagar.login()
// sagar.requestLeaves(10)

// static method in  javascript
// class Animal {
//   constructor(name){
//     this.name = Animal.capitalize(name)
//   }
//   walk(){
//     alert("Animal "+ this.name + " is walking")
//   }
//   static capitalize(name) {
//     return name.chartAt(0).toUpper() + name.subsrt(1, name.legth)
//   }
// }

// j = new Animal("jack")
// j.walk()

/**********FATCH API********** */
// let p = fetch('https://api.weatherbit.io/v2.0/current?lat=35.7721&lon=-78.63861&key=XXX&units=I');
// p.then((response) => {
//   console.log(response.status)
//   console.log(response.ok)
//   console.log(response.headers)
//   return response.json()
// }).then((value2) =>{
//   console.log(value2)
// }) 

// *********Error in javascript************
// 1. range error ;
// 2. reference error
// 3. syntext error
// 4. type error  //
// 5. uri error  // URI error beacuse of space or syntext


//*********** Practice Set *******************/
// 1. b) Write a program to print “Hello World” on console.
        // console.log("Hello World");

// 2. a) program to find the area of square and triangle.
    // const pi = 3.14;
    // let r = parseInt(prompt("enter the radius of circle : "));
    // function areaOFCircle(r){
    //     let result = pi * r * r;
    //     console.log("Area of circle is " + result);
    // }
    // areaOFCircle(r);
// c) Write a program to convert temperature from Celsius to Fahrenheit
        // let celsius = parseInt(prompt("Enter your outside temparatur in celsius and get fahrenheit: "));
        // let fahrenheit = (celsius * 9/5) + 32;
        // console.log(fahrenheit);

//  d) Write a program to calculate result in percentage from given marks of 3 subjects.
        // const tsMarks= 300;
        // let s1 = 80;
        // let s2 = 50;
        // let s3 = 40;
        // let s = s1 + s2 + s3;
        // function markPercetage() {
        //     let result =  (s/tsMarks) * 100;
        //     console.log(result);
        // }
        // markPercetage();

// 3. a) Write a program to check whether given number is positive or negative.
    // const number = prompt("enter number and check if its posative or nagetive: ")
    // if(number > 0){
    //     console.log("positive");
    //     document.write("postive");
    // }else{
    //     console.log("nagative");
    //     document.write("nagative");
    // }
    // b) Write a program to find maximum of three numbers.
        // let num1 = parseInt(prompt("Enter first number: "));
        // let num2 = parseInt(prompt("Enter second number: "));
        // let num3 = parseInt(prompt("Enter third number: "));
        // let maxx;

        // if(num1 >= num2 && num1 >= num3) 
        //     maxx = num1;

        // else if (num2 >= num1 && num2 >= num3) 
        //      maxx = num2;

        // else 
        //     maxx = num3;

        // console.log("The maximum number is " + m);
    // c) Write a program to check whether given number is divisible by 3 or not.
        // const num = parseInt(prompt("enter a number for ckeck it is divisible by 3 or not : "))
        // if( num % 3 === 0 ){
        //     console.log("it is divisible by 3");
        // }else{
        //     console.log("it is not divisible by 3");
        // }
    //   d) program to check whether given year is leap year or not in javascript
        // const year = parseInt(prompt("enter a year for ckeck it is leap year or not : "))
        // function leapyear(year)
        // {
        // return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        // }
        // console.log(leapyear(year));
        
// 4. Write a program which takes two numbers, operation from command line arguments and 
//         perform following operation using switch:
//         i. Minimum of two numbers
//         ii. Addition of two numbers
//         iii. Multiplication of two numbers
        // parseInt(prompt("enter a number 1 : "))
         //parseInt(prompt("enter a number 2 : "))
        // let n1 = 25 
        // let n2 =  262
        // let num;
        // switch(num){
        //     case (n1 > n2):
        //         console.log(n2 +" is minimum")
        //     break;
             
        // }