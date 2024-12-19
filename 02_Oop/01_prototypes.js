let computer = { cpu : 12}
let lenovo = {
    Screen : "HD",
   // __proto__ : computer
}
let tomHardware = {}
console.log(`lenovo` , lenovo.__proto__)

// Another way of doing prototypes{merging different properties}

let genericCar ={
    typres : 4
}
let tesla = {
    driver : "AI"
}
Object.setPrototypeOf(tesla,genericCar)// here properties of genericCar access by tesla and by flipping vice versa is true
console.log(`tesla`, tesla.driver )