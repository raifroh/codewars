// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//param a string
//return a string
//example see left
//psuedo code: split by space, return the first two letters, join with a period and then to uppercase


const abbrevName = name => {
    let arr = name.split(' ')
    let initials = arr.map(x => x[0]) 
    console.log(initials)
    return initials.join('.').toUpperCase()
  }