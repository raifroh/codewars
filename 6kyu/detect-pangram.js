// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//Parameters= a string, which must be made lowercase
//Return = true or false, if all letters of alphabet are present
//Examples = 26 letter minimum, case insensitive, all letters


function isPangram(string){
    //needed to make a list of all letters to compare against
    const list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   //automatically exclude strings less than 26
    if(string.length < 26){return false}
    //need to compare the list we made and see if it is completely (every) present in the string provided
    else if(list.every(item => {
    //make sure the string is lowercase, and then use include
    return string.toLowerCase().includes(item);}) === true){return true}
    //otherwise false
    else{return false}
  }
  