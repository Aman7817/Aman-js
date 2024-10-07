// /*
 "use strict";// treat all js code as new versio
 //alert(3+3) // w are using node js, not browser


// let age = 19
// let state;

// // number => 2 to power 53
// // bigint
// // boolean => true / false 
// // null => standalone value 
// // undefined
// // symbol => unique
// // object 

// console.log(typeof undefined);// undefined 
// console.log(typeof null); // object



// let score = "Aman"

// console.log(typeof score);
// console.log((typeof score));

// let valueInNumber = Number(score)
// console.log((typeof valueInNumber));
// console.log(valueInNumber);
// "33" => 33
// "33abc" => Nan = not an number 

// let isLoggedIn = ""

// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);
//  1 => true ; 0 => fale
// // "" => false
// // "Aman" => treue;

//  let someNumber = 33

//  let stringNumber = String(someNumber)
//  console.log(stringNumber);
//  console.log(typeof stringNumber);

///// *******************OPERATIONS******************************

// let value = 3
// let negValue = -value
//  console.log(negValue)

// let str1 = "hello"
// let str2 = " Aman"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 + "2");


// console.log(true);
// console.log(+"");

// let num1 ,num2, num3 

// num1 = num2 = num3 = 2+2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);
// */

//   /// primitive
// // 7 types : string, number, boolean, null, undefined, symbol,bigInt



// Reference (non primitive)
// array ,objects,functions

// const score = 100
// const scoreValue = 1000.3
// const isLOggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// //console.log(id === anotherId);

// //const bigNumber = 345247263826232783n



// //reference (non primitive)

// /// array ,objects,functions

// const heros = ["Ironman", "naagraj","doga"];
// let myObj = {
//     name: "aman",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof  myFunction);


// /// ++++++++++++++++++++++++++++++++

// // memory
// // stack(primive),heap(non primitive)

let myYoutubename = "thebreillianvloger"

let anothername = "chaiaurcode"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "aman@.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email ="abx@.com"
    


console.log(userOne.email);
console.log(userTwo.email);

