// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//parameters = string
//return = array of indexes
//example see left

const capitals = word => {
    let arr = word.split('')
    let newArr = []
    let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for(i = 0; i < arr.length; i++){
      if(upper.includes(arr[i])){
        newArr.push(arr.indexOf(arr[i]))
      }
    }
  return newArr
  };