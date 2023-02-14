// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//params = an array
//return an array
//example see left


//looks like we can filter for 0s
//filter again to get another array of just the zeros
//move filtered array to new array with no filter
const moveZeros = arr => {
    let cleanArr = arr.filter(x => x !== 0)
    let numberOfZeros = arr.filter(x => x === 0)
    
  return cleanArr.concat(numberOfZeros)
  }