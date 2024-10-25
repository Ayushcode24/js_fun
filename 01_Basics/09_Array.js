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

   // 4. You have an array named `teaorders` wit "chai","iced tea","matcha" and "earl grey".Remove the last element of array using `pop` method and store it in a variable named `LastOrder`.

   let teaorders = ["chai","iced tea","matcha","earl grey"]
    const LastOrder = teaorders.pop();// This remove last elemt of array and by again apply remove 2nd last element.
    console.log(LastOrder);

    // 6. You have an array namede `popularTeas` containing "green tea","oolong tea" and "chai".Create a soft copy of this array named `softCopyTeas`.

    