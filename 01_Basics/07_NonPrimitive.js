/*This is object */
const username = {
    "first name" : "ayush",
    isLoggedin : true,
}
username.firstname = "Aaayush";//  we can update the value if it constant or nor as they are object.
username.lastname = "Ray";// Also we can add new variable
console.log(username.lastname);// by .notation we can access the value of object.
console.log(username["first name"]) //another way of accessing considering there is space inbetween
console.log(username);
console.log(typeof username)

// Array 

let anotherUser = ["ayush","ray",true]// in Array here we can store different types of datatypes
console.log(anotherUser[1]);// To access the value of array we use array indexing.

// In js, implicit conversion is very bad.
// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));
