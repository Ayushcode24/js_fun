/* 1. Write a while loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named sum.*/
let sum = 0;
let i = 1;
while (i <= 5) {
    sum = sum + i;
    i++;
}
console.log(sum);

/* 2. write a while loop that count down from 5 to 1 and stores numbers in an array named `countdown`.*/
let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j)
    j--
}
console.log(countdown);

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
console.log(total);

/* 5. Write a `for` loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named `multipliedNumbers`. */

let multipliedNumbers = [];
let numbers = [2,4,6];
for(let i = 0; i < numbers.length;i++){
    takeNumber = numbers[i] * 2;
    multipliedNumbers.push(takeNumber)
}
console.log(multipliedNumbers);
/* 6. Write a `for` loop that lists all the cities in the array`["Paris"."NY","Tokyo","London"]` and store each city in a new array`cityList`. */

let cities = ["Paris","NY","Tokyo","London"];
let cityList = []
for(int c = 0; c < cityList; c++ ){
    myCity = cities[c];
    cityList.push(myCity);
}
console.log( cityList);