// operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//parameters operator as string, and two numbers
//return the answer
//example see left


const basicOp = (operation, value1, value2) => {
    if(operation === '+'){
      return value1 + value2
    }else if(operation === '-'){
      return value1-value2
    }else if(operation === '*'){
      return value1*value2
    }else if(operation === '/'){
      return value1/value2
    }
  }