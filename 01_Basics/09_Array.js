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

    // 5. You have an array namede `popularTeas` containing "green tea","oolong tea" and "chai".Create a soft copy of this array named `softCopyTeas`.
  
    let popularTeas = ["green tea","oolong tea","chai"]
    let softCopyTea = popularTeas
    popularTeas.pop()
    console.log(popularTeas)
    console.log(softCopyTea)// It will also changed , this is known as soft copy

    
    //6. You have an array named `topCities` containing "Berlin","Singapore" and "New york".Create a hard copy of this array named `hardCopyCities`

    let topCities = ["Berlin","Singapore","New York"]
    let hardCopyCities = [...topCities]
    //let hardCopyCities = topCities.slice() // Thsis is another way of hard copy but not preffered
    topCities.pop()
    console.log(topCities)
    console.log(hardCopyCities)//This time it will not changed.

    // 7. You have two array : `europeanCities` containg "Paris" and "Rome" and `asianCities` containing "Tokyo" and "bangkok". Merge these two arrays into a new array named `worldCities`

    let europeanCities = ["Paris","Rome"]
    let asianCities = ["Tokyo","Bangkok"]
    let worldCities  = asianCities.concat(europeanCities)
    console.log(worldCities)

    // 8. You have an array named `teaMenu` containing "masala chai","oolong tea","green tea" and "earl grey".Find the length of the array and store it in a variable named `menulength`

    let teaMenu = ["Masala chai","oolong tea","green tea","earl grey"]
    let menulength = teaMenu.length;
    console.log(menulength)

    // 9. You have an array named `citybucketList` containing "Kyoto","London","Cape Town" and "Vancourver". Check i "London" is in the array and store the result in a variable named `isLondonInList`.
    let citybucketList = ["Kyoto","London","Cape Town","Vancourver"]
    let isLondonInList= citybucketList.includes("London")
    console.log(isLondonInList) 

    