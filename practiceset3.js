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
  // fill(adname, trainno){
  //   this.name = adname
  //   this.trainno = trainno
  // }
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

// ******************* Inheritance ********************* 
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

// ***********************mathod overriding **********
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
        //  parseInt(prompt("enter a number 2 : "))
        // let n1 = 25 ;
        // let n2 =  262;
        // function findValue(a, b) {
        //     switch (true) {
        //         case (a < b):
        //             console.log("minimum number is "+ a);
        //         case (b < a):
        //             console.log("maximum number is "+ b);
        //         case (a , b):
        //             res = a + b
        //             console.log("Addition of two numbers " + res);
        //         case (a , b):
        //             res = a * b
        //             console.log("Multiplication of two numbers " + res);
        //         default:
        //             return "Numbers are equal.";
        //     }
        // }
        // findValue(n1, n2);
        
//  5.   a) Write a program to print first N numbers in ascending and 
//     descending order, where N is the user input.
        // const N =parseInt(prompt("Enter number for natural number:  "));
        // for(let i=1; i<=N; i++){
        //     console.log(i);
        //     document.write(i + " ");
        // }
        // for(let j = N; j >= 1; j--){
        //     document.write(j+ " ");
        //     console.log(j);
        // }

        // b) Write a program to find maximum of three numbers
        // const N =parseInt(prompt("Enter number for natural number:  "));
        // let i = 1;
        // while(i<=N){
        //     console.log(i);
        //     i++;
        // }
    // c) Write a program to print numbers between 100 to 1000 which are divisible by 5.
        // for (let i = 100; i<=1000; i++){
        //     if( i % 5 === 0){
        //         console.log(i + " ")
        //     } 
        // }
    // d) Write a program to find whether given number is prime number or not.
    //     const n =parseInt(prompt("Enter number for ckeck number is prime number or not:  "));
    //     function isPrime(n){
    //         if(n <=1){
    //             return false;
    //         }
    //         for(let i = 2; i < n; i++)
    //             if(n % i == 0){
    //                 return false;
    //             }
    //         return true;
            
    //     };
    //     isPrime(n) ? console.log("true"): console.log("false");

//  6 a) Write a program to copy array elements from one array to another.
            // let arr = [2, 61, 5, 98];
            // let arr2 = arr;
            // console.log(arr2)
//    b) Write a program to count even numbers present in array.
        // let arr = [2, 61, 5, 98];
        // const even = arr.filter(number => {
        //     return number % 2 === 0;
        // }) 
        // console.log(even)

//    c) Write a program to sort array in ascending order.
            // const arr = [2, 61, 5, 98];
            // console.log(arr.sort())

//  8 a) Create a student class with student_id, subject_code and marks,
        //which takes input using method getdata() and display result using putdata() method.
        // class student {
        //     constructor() {
        //         this.student_id = '';
        //         this.subject_code = '';
        //         this.marks = 0;
        //     }
        
        //     getData() {
        //         this.student_id = prompt('Enter Student ID:');
        //         this.subject_code = prompt('Enter Subject Code:');
        //         this.marks = parseFloat(prompt('Enter Marks:'));
        
        //         // Assuming you want to validate the input or perform any processing here
        //     }
        
        //     putData() {
        //         console.log('Student ID:', this.student_id);
        //         console.log('Subject Code:', this.subject_code);
        //         console.log('Marks:', this.marks);
        //     }
        // }
        // const sagar = new student();
        
        // // Get data from the user
        // sagar.getData();
        
        // // Display the data
        // sagar.putData();
        

//     b) Create class person having field person_id, name, age. It has 
        // method ageGroup() which will print age group of person as per 
        //following:
        //If age is <8, Child
        //If age is > 8 and <20, teenage
        //If age is >=20 and <=40, Young
        //If age is >40, Old
        // class person{
        //     constructor() {
        //         this.person_id = '';
        //         this.name = '';
        //         this.age = 0;
        //     }
        //      getData() {
        //         this.student_id = prompt('Enter Person ID:');
        //         this.subject_code = prompt('Enter Name:');
        //         this.marks = parseFloat(prompt('Enter Age:'));
        //      }
        
        //     ageGroup(age) {
        //         if(age < 8){
        //             document.write("your are a Child")
        //         }else if( 8 < 20 ){
        //             document.write("your are a teenage")
        //         }else if( 20 < 40 ){
        //             document.write("your are a Young")
        //         }else if( age > 40 ){
        //             document.write("your are a Old person")
        //         }
        //     }
        // }
        // const n1 = new person();
        // n1.getData()
        // n1.ageGroup()

// 9 Write a program for Box class which contains default constructor and 
    // parameterized constructor for width, height, depth and the 
    // method volume which finds the volume of Box.
    // class Box {
    //     constructor(){
    //         this.width = 5;
    //         this.hight = 7;
    //         this.depth = 2;
    //     }
    //     volume(){
    //         this.volume = this.width * this.hight * this.depth;
    //         console.log(this.volume);
    //     }

    // }
    // let v1= new Box();
    // v1.volume()

// 10. Prepare a mini project for “Travel booking system”. 
//     Hint: Create class Trip which has the data members source, 
//     destination, start_date and no_of_days. It has the method bookNow() 
//     to plan a trip and method showDetail() to print the trip details. Use 
//     parameterized constructor
        // class Trip {
        //     constructor(){
        //         this.destination = "";
        //         this.start_date = "";
        //         this.no_of_days = 0;
        //     }
        //     bookNow(){
        //         this.destination = prompt('Enter The Destination:');
        //         this.start_date = prompt('Enter date of trip:');
        //         this.no_of_days = parseInt(prompt('Enter No of Days:'));
        //     }
        //     showDetail(){
        //         console.log('Destination:', this.destination);
        //         console.log('Trip Date:', this.start_date);
        //         console.log('Days:', this.no_of_days);
        //     }
        // }
        // const user = new Trip();
        // user.bookNow();
        // user.showDetail();

// 11. a) Create a class Biodata having fields name, qualification and date of birth.
//         Class Biodata inherits a class Address having fields city and pin. 
        // Write a program to display all details for 2 persons.
            // class Biodata {
            //     constructor(){
            //         this.name = "";
            //         this.qualification = "";
            //         this.date_of_birth = 0;
            //     }
            //     bookNow(){
            //         this.name = prompt('Enter The Name:');
            //         this.qualification = prompt('Enter your qualification :');
            //         this.date_of_birth = parseFloat(prompt('Enter No of Date of Birth:'));
            //         this.city = prompt('Enter the city:');
            //         this.pin = parseFloat(prompt('Enter city Pin:'));
            //     }
            //     showDetail(){
            //         console.log('Destination:', this.name);
            //         console.log('Trip Date:', this.qualification);
            //         console.log('Days:', this.date_of_birth);
            //         console.log('city:', this.city);
            //         console.log('pin:', this.pin);
            //     }
            // }
            // class Address extends Biodata {
            //     addre(){
            //           this.city = "";
            //           this.pin = 0;
            //       }
            //     }
            // const user1 = new Biodata();
            // const user2 = new Biodata();

            // user1.bookNow();
            // user2.bookNow();

            // user1.showDetail();
            // user2.showDetail();

    // b) Create class vehicle which has the data members id and speed. 
    // Create subclass bike which inherits class vehicle and having 
    // method display(). Use super keyword to display id and speed.
    class Vehicle{
        constructor(id, speed){
            this.id = id;
            this.speed = speed;
        }
    }
    class Bike extends Vehicle{
        constructor(id, speed){
            super(id, speed);
            
        }
        display(){
            document.write("Your vehical id: "+ this.id);
            document.write("<br>");
            document.write("And Your speed is : "+ this.speed);
        }
    }
    const user1 = new Bike(123123, 50);

    user1.display()
