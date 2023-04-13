// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//parameters = an array of strings and numbers
//return the total after ssubtracting number integers from string integers
//example see left
//psuedo code - two filters and sum


const divCon = x => {
    let nums = x.filter(x => typeof x === 'number')
    let strings = x.filter(x => typeof x === 'string')
    if(nums.length < 1){
      return 0 - strings.map(x => Number(x)).reduce((x,y) => x+y)
    }else if(strings.length < 1){
      return nums.reduce((x,y) => x+y)
    }else{return nums.reduce((x,y) => x+y) - strings.map(x => Number(x)).reduce((x,y) => x + y) }
  }