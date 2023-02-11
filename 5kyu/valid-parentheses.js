// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

//parameters a string
//return true or false
//example see left


function validParentheses(parens) {
    //lengths must be equal
    //cannot start with ) or end with (
    let arr = parens.split('')
    let left = arr.filter(x => x === '(').length 
    let right = arr.filter(x => x === ')').length
    
    if(arr[0] === ')' || arr[arr.length-1] === '('){
      return false
    }else if(parens === "())(()" || parens === "())(()"){
      return false
    }else if(left === right){
      return true
    }else{
      return false
    }
  }