/* 1. Write a while loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named sum.*/
let sum = 0;
let i = 1;
while (i <= 5) {
    sum = sum + i;
    i++;
}
//console.log(sum);

/* 2. write a while loop that count down from 5 to 1 and stores numbers in an array named `countdown`.*/
let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j)
    j--
}
//console.log(countdown);

/* 3. Writ a do while loop that prompts a user to enter their favorite tea type until they enter "stop", stores each tea type in an array named `teaCollection`. */
/*let teaCollection =[];
let tea;
do {
    tea = prompt(`Enter yur favourite tea(type "stop" to finish)`)
    if(tea !== "stop"){
        teaCollection.push(tea)
    }
} while (tea !== "stop");*/
// node.js doesn't support this as it is browser thing.

/* 4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.*/
let total = 0;
let k = 1;
do {
    total = total + k;
    k++;
} while (k<=3);
//console.log(total);

/* 5. Write a `for` loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named `multipliedNumbers`. */

let multipliedNumbers = [];
let numbers = [2,4,6];
for(let i = 0; i < numbers.length;i++){
    takeNumber = numbers[i] * 2;
    multipliedNumbers.push(takeNumber)
}
//console.log(multipliedNumbers);
/* 6. Write a `for` loop that lists all the cities in the array`["Paris"."NY","Tokyo","London"]` and store each city in a new array`cityList`. */

let cities = ["Paris","NY","Tokyo","London"];
let cityList = []
for(let c = 0; c < cityList ; c++ ){
    myCity = cities[c];
    cityList.push(myCity);
}
//console.log( cityList);
// Some most conceptual problems of Loop
/* 1. write a  `for` loop that loops through th array ["green tea", "black tea","chai","cold"] and stops loops when it finds "chai", store all teas before "chai" in a new array named `selectedTeas` */

let teas = ["green tea", "black tea","chai","cold"];
let selectedTeas =[];
for(let i = 0; i < teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
//console.log(selectedTeas)

/* 2. write a `for` loop that loops through the array ["London","NY", "Paris","Berlin"] and skips "Paris", store the other cities in a new array named `visitedCities`. */

let place = ["London","NY", "Paris","Berlin"];
let visitedCities = [];
for (let t = 0 ; t < place.length ; t++) {
    if(place[t] === "Paris"){
        continue;
    }
    visitedCities.push(place[t]);
}
//console.log(visitedCities);

/* 3. use a `for-of` loop to iterate through the array  [1,2,3,4,5] and stop when number `4` is found. Store the numbers before `4` in an array named `smallNumber`. */

let number = [1,2,3,4,5];
let smallNumber = [];
for (const num of number) {
    if(num === 4){
        break;
    }
    smallNumber.push(num);
}
//console.log(smallNumber);

/* 4. Write a for loop that  iterates through the array [2,5,7,9] skip the value `7` and multiply rest by 2 and store result in new array named `doubleNumbers`. */

let myNumbers = [2,5,7,9] 
let doubleNumbers = []
    for ( let i = 0;i < myNumbers.length; i++){
        if (myNumbers[i] === 7){
            continue;
        }
        doubleNumbers.push(myNumbers[i] * 2);
    }
console.log(doubleNumbers)

/* 5. Use a `for-of` loopto iterate through the array ["chai" , "green tea", "black tea", "jasmine tea", " herbal tea"] and stop when length of current tea name is greater than 10. Store the teas iterated over in an array named `shortTeas`.
*/
 let myTeas = ["chai" , "green tea", "black tea", "jasmine tea", " herbal tea"];
 let shortTeas = []

 for (const tea of myTeas) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
 }
 console.log(shortTeas)
