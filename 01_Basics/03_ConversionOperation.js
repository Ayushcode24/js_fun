let score = "45A"
console.log(typeof score)
console.log(typeof (score))
let ValueInNumber = Number(score)// conversion
console.log (typeof ValueInNumber)
console.log (ValueInNumber)
// "45" => 45
// "45A" => NaN  (Not a Number)
// true => 1 or false => 0
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log (booleanIsLoggedIn)
// 1 => true; 0=> false
//"" => false
//"ayush" => true



//***********************OPERATIONS*******************
let value = 24
let negValue = -value
console.log(negValue)

/*
console.log(6+9)
console.log(8-4)
console.log(8*7)
console.log(2**4)//power
console.log(9/3)
console.log(9%4)// remainder
*/
let str1= "Namaste"
let str2 = " Bharat"
let str3 = str1 + str2
console.log(str3)

console.log("1"+ 2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true)// give output 1
let counter = 124
counter++// postfix please read prefix and postfix 
console.log(counter)
