// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

//parameters = number
//return = a number aka factorial
//example see below
//psuedo code = for loop up to n (make it <= n in the loop) then reduce


const factorial = n => {
    let newArr = []
    for(i = 0; i <= n; i++){
      newArr.push(i)
    }
    
    let finalArr = newArr.filter(x => x != 0)
    
    if( n === 0 || n === 1){
      return 1
    }else {return finalArr.reduce((x,y) => x*y)}
  }