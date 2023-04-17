// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid
// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.

//parameters a string
//return = valid or invalid aka true or false
//example see left
//psuedo code- remove spaces, remove non alphabetical characters
//and join the string. Then create another version reversed,
//if equal then return valid



const palindrome = string => {
  let arr = string.toLowerCase().replace(' ', '')
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let newArr = []
  for(i = 0; i < arr.length; i++){
    if(chars.includes(arr[i])){
      newArr.push(arr[i])
    }else{continue}
  }
  let finalArr = newArr.join('')
  let reverse = finalArr.split('').reverse().join('')
  
  if(finalArr === reverse){
    return true
  }else{
    return false
  }

}