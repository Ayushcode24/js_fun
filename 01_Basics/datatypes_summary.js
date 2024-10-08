// Primitive Datatypes
 // 7 Types : String,Number,Boolean,Null,undefined,Symbol,BigInt

 // javascript is dynamic language

 // Reference (Non Primitive) Datatypes
 // Arrays, Objects, Functions

 /*const heros = ["Shaktiman","Ram","Hanuman"];
 let myObj = {
    name : "Ayush";
    age : 22
 }
 const myFunction = function(){
    console.log("Hello bharat");
    
 }


 // The datatype by using typeof of null is object.
 // The datatypes by using typeof of non primitive is object.
 // The datatypes of function by using typeof it return function i.e, function object

 for references we can read  by this link 
  https://262.ecma-international.org/5.1/#sec-11.4.3

*/

// *****************************************************************************

// Two types of memory - Stack (For Primitive)  & Heap (Non-Primitive)
//1. Stack = value donot change  
  let myFirstName = "Ayush"
  let anotherName = myFirstName
  anotherName = "Ray"
  console.log(myFirstName);
  console.log(anotherName);


// 2. heap= value changes

   let userOne = {
      email : "Ayush@gmail.com"
     
   }
   let userTwo = userOne

   userTwo.email = "Ayushray@gmail.com"
   
   console.log(userOne);
   console.log(userTwo);
   
   
  
  