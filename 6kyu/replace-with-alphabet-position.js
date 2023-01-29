// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


//parameters a long string
//return numerical position as a long string separated
//example see left

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function alphabetPosition(text) {
  //split text into an array and lowercase
  let arr = text.toLowerCase().split('')
  //push to empty arr
  let newArr = []
  //for loop using .includes
  for(i = 0; i < arr.length; i++){
  //ignore non alphabeticals
  if(alphabet.includes(arr[i])){
    newArr.push(arr[i])
  }else{
    continue
  }
  }
  //new for loop 
  let finalArr = []
  for(i = 0; i < newArr.length; i++){
    finalArr += parseInt(newArr[i], 36) - 9 + ' '
  }
  return String(finalArr.slice(0,-1))
}