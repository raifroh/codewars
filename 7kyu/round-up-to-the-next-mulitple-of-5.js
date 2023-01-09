// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

//pI nput may be any positive or negative integer (including 0).
//return closest multiple of 5
//examples 3    ->   5
// 12   ->   15
// 21   ->   25



const roundToNext5 = n => {
    //if statements
    //first one to catch anything that is a multiple of 5
    if(n % 5 === 0){
      return n
    }
      //for the rest
    else{ return Math.ceil(n/5)*5}
  }
