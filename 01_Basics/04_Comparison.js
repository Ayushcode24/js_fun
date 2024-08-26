console.log("2" > 1)// here it convert string into number and give o/p in boolean
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);

// The above comparisons try to avoid because they are not properly correct, this is drawback of js that it allows them to run for this we can also use typescript

// Now we use === strict check, here string not convert into anyother datatypes
console.log("04" === 4);
