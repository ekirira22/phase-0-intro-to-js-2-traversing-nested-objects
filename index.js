const userInfo = {
    //firstName element 1 that returns a string || key => string
    firstName: "Avi",
    lastName: "Flombaum",
    //company element 2 that is an object within the object || key => object
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    //friends element 3 that is an array within the object || key => array
    friends: [
        //friends array that has elements that are objects || index => object
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
        //projects element 3 that is an array within the object || key => array
    projects: [
        //projects array that has elements that are objects || index => object
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };

//   function myIterator(myObject){
//     //Level 1 Iterator
//   for(const level1key in myObject){
//       if(typeof myObject[level1key] === 'object'){
//         //Level 2 Iterator
//           for (const level2key in myObject[level1key]){
//               if(typeof myObject[level1key][level2key] === 'object'){
//                 //Level 3 Iterator
//                  for(const level3key in myObject[level1key][level2key]){
//                      if(typeof myObject[level1key][level2key][level3key] === 'object'){
//                       //Level 4 Iterator
//                       for(const level4key in myObject[level1key][level2key][level3key]){
//                           console.log(myObject[level1key][level2key][level3key][level4key])
//                       }
//                      }else{
//                           console.log(myObject[level1key][level2key][level3key])
//                      }
//                  }
//               }else{
//                  console.log(myObject[level1key][level2key])
//               }
//           }
//       }else{
//           console.log(myObject[level1key])
//       }
//   }
// }

// myIterator(userInfo)

function deepIterator(objElement){
  //We will write a function that will recurssively iteratate through an object
  for(const recKey in objElement){
    if(Array.isArray(objElement[recKey])){
      deepIterator(objElement[recKey])
    }
    else if(typeof objElement[recKey] === 'object'){
      // do something
      deepIterator(objElement[recKey])
    }else{
      console.log(objElement[recKey])
    }
  }

}

deepIterator(userInfo)

// 1 ==> // firstName is a string // output
//2 ==> //lastName is a string // output
//3 ==>  //company is an object //
    //encounters a recurrsor that calls itself
    //checks if level 2 keys are objects 
    //they are not so it outputs values in else block
//4 ==> // friends is an object
    // calls itself
    //....