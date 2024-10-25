// 1. Declare an array named 'teaFlavors' that contains the string "green tea","black tea", and " oolong tea", Access the first element of the array and store it in a variable named 'firstTea'.
  
let teaFlavors = ["green tea","black tea","oolong tea"]
  const firstTea = teaFlavors[0];
  console.log(firstTea);

  // 2. You have an array named 'teaTypes' containing "herbal tea","white tea" and " masala chai", change the second element of array to "jasmine tea":
  
  let teaTypes = ["herbal tea","white tea","masala chai"]
   teaTypes[1]="jasmine tea"
   console.log(teaTypes)
  
   // 3. Declare an array named 'citiesVisited' containg "Mumbai" and "Sydney",add "Berlin" to the array using the 'push' method.

   let citiesVisited = ["Mumbai","Sydney"]
   //citiesVisited[2]="Berlin"
   citiesVisited.push("Berlin");
   console.log(citiesVisited);