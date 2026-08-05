// // print table
// console.table([2, 4, 6, 8, 10, 12]);
//   //print name
// console.log("my name is", "suhail khan", "and my age is", 22, "years old");

// //create two variable and swap their values
// let a = 5;
// let b = 10;
// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a",a,"b",b);

// // Create a constant variable for PI and print it.
// const pi = 3.14;
// console.log(pi);

// let name;
// console.log(name);

// var age;
// console.log(age)

// //create a variable score and increase it by 10.
// let score = 10;
// score = 10 + 10;
// console.log(score);


// // Data type practise
// let name = "suhail"
// console.log(typeof "name")

// let car = null;
// console.log(typeof car);
//  let job;
//  console.log(job);
//  let id = Symbol("uid");
//  console.log( typeof id);

//  let bigNum = 1252858512255n;
//  console.log( typeof bigNum)
//  console.log(typeof undefined)
//  console.log(typeof null)
//  console.log(typeof [])
//  console.log(typeof function() {});


//  // String conversion
//  let str = "suhail";
//  let num = Number(str);
//  console.log(typeof num);

//  let age = 22;
//  let str2 = String(age);
//  console.log(typeof str2);


// //leap year consept

// function isLeapYear(year){
//     if(year % 400 == 0){
//         console.log("leap year")
//     }
//     else if(year % 100 ==0){
//         console.log("not leap year")
//     }
//     else if(year % 4 ==0){
//         console.log("leap year")
//     }
//     else{
//         console.log("Not leap year")
//     }
// }
// isLeapYear(1900)

// //type conversion and coercion 
// let str = "5";
// let num = Number(str);
// console.log(typeof num);

// let tr = true;
// let bl = Boolean(tr);
// console.log( typeof bl)

// console.log("5" + 5);   // string  + integer =concatenation
// console.log("5" - 2);
// console.log("5" * "7");
// console.log("8" % 3);
// console.log(true + 1);
// console.log(false + 1);
// console.log(true % false);
// console.log(true - false);
// console.log(true / false);
// console.log(typeof NaN)

// // ParseInt logic 
// let nms = "59884233";
// let num2 =parseInt(nms);
// console.log(num2);   

// let width= "100px"
// let numWidth = parseInt(width);
// console.log(numWidth)

// //string notes for understanging
// let s = "hello world";
// console.log(s.length)
// console.log(s.toUpperCase)
// console.log(s.indexOf("world"))
// console.log(s.includes("hello"))
// console.log(s.includes("mango"))
// console.log(s.slice(0,4))
// console.log(s.slice(4,8))
// console.log(s)
// console.log(s.substring(3,8))
// console.log(s.replace("hello", "global"))
// let n = "I am a hidden developer";
// console.log(n.split(" "));
// // string practise question

// //Create a string and print its length.
// let k = "suhail khan"
// console.log(k.length);

// // Convert a string into uppercase.
// console.log(k.toUpperCase);
// // Check if a string includes the word "JavaScript".
// console.log(k.includes("javascript"))
// //Extract the word "World" from "Hello World".
// console.log(k.substring(7))


//ternary operator

// Check if a number is positive or negative.
// let num1 = 43;
// let result1 = num1 > 0 ? "Positive" : "negative";
// console.log(result1)

// //Check if a number is even or odd.
// var num = 4;
// var result = (num % 2 === 0) ? "even" : "odd";
// console.log(result)

// // Find the greater number between two values using ternary operator.
// let a = 10;
// let b = 30;
// let checkGreater = a > b ? a : b;
// console.log(checkGreater)

//Create a mini biodata program using variables and template literals.
let name = "Suhail";
let age = 22;
let city = "Gorakhpur"
let profession = "Student";
let college = "Buddha Degree College";
let course = "BCA";
console.log(`
-----MINI BIODATA-----

    Name: ${name}
    Age: ${age}
    City: ${city} 
    Profession: ${profession}
    College: ${college}
    Course: ${course}

    `)

   //  Calculate the area of a rectangle.
   let length = 6;
   let width = 4;
   
  let area = length * width;
   console.log(area)
   
   //Calculate the simple interest.
   let p = 10000;
   let r = 5;
   let t = 2;
   let si = (p * r * t)/100;
   console.log(`Simple Interest:  ${si}`)

   //Convert temperature from Celsius to Fahrenheit.
   // formula Fahrenheit = (celsius * 9 / 5) + 32
   let celsius = 25;
   let Fahrenheit = (celsius * 9 / 5) +  32;
   console.log(`Fahrenheit: ${Fahrenheit}`)

   //Convert kilometers into meters.
   let kilometers = 5;
   let meters  = kilometers * 1000;
   console.log(`Meters: ${meters}`)

   // Calculate total marks and percentage of 5 subjects.
   let hindi = 67;
   let english = 74;
   let socialScience = 69;
   let science = 83;
   let computer = 65;
   let total = (hindi + english + socialScience + science + computer)
   let percentage = (total / 500) * 100;
   console.log(`
      -----RESULT-----
      Total: ${total}
      Percentage:${percentage.toFixed(2)}

      DECLERATION: 11/05/2025
    `)

    //Calculate electricity bill based on units consumed.