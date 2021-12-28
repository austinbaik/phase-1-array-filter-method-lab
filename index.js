// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.


// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(source, sought){
   const newArray = source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
   )
   // console.log(newArray);
   return newArray;
}


// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.


function fuzzyMatch(source, sought) {
   const leng = sought.length; 
   const newArray = source.filter((possibleMatch) => possibleMatch.toLowerCase().substring(0, leng) === sought.toLowerCase().substring(0, leng)
   )
   return newArray
   }; 
  


   // matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.


function matchName(source, sought) {
   const newArray = source.filter((possibleMatch) => possibleMatch.name === sought)
      return newArray
    }

    