// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let newArray = Array.from(str)
    return newArray.reverse().join('')
  }

  //or

  function solution(str){
    return str.split('').reverse().join('');  
  }