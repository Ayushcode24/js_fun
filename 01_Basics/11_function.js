/* 1. write a function named `makeTea` that takes one parameter `typeOfTea` and returns a string like "Making green tea" when called with "green tea",store the result in a variable named 'teaOrder`. */

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
//console.log(teaOrder)
/* 2. Create a function named `orderTea` that takes one parameter, `teaType` Inside this function create another function named `confirmOrder` that returns a message like "Order confirmed for chai", call `confirmOrder` from within `orderTea` and return the result. */

function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai"
    }
    return confirmOrder();
}
let myConfirmedOrder = orderTea("chai")
console.log(myConfirmedOrder)

/* 3. Write an arrow function named `calculateTotal` that takes two parameters; `price` and `quality`. The function should return the total cost by multiplying the `price` and `quantity`. Store the result in a variable named `totalCost`. */
// This is an arrow function 
const calculateTotal = (price,quantity)   => price * quantity
   // return price * quatity;

let totalCost = calculateTotal(499,500);
console.log(totalCost);

/* 4. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with argument "earl grey", Return result of calling `makeTea` */
// This is higher order function.
function makeTea(typeOfTea){
    return `maketea : ${typeOfTea}`;
}
function processTeaOrder(makeTea){
    return makeTea('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order);

/* 5. Write a function named `createTeaMaker` that return another function, the returned function should take one parameter `teaType`, and return a message like "Making green tea" Store returned function in a variable named `teaMaker` and call it with "green tea" */

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker();
console.log(teaMaker("Green Tea"))
