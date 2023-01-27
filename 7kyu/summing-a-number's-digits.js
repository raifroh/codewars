// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//parameters a number
//return the sum of the numbers
//example see left


const sumDigits = number => {
    //we need to split number into an array
    //make all numbers positive
    //then reduce it
    //then return it
    
    let numArr = number.toString().split('')
    //for loop and push only items >0 to new Arr
    let emptyArr = []
    for(i = 0; i < numArr.length; i++){
      if(numArr[i] > 0){
        emptyArr.push(numArr[i])
       } 
    }
    console.log(emptyArr)
    
    let absVal = emptyArr.map(x => Math.abs(x))
    let numberArr = absVal.map(x => Number(x))
    return numberArr.reduce((x,y) => x+y,0)
  }
  