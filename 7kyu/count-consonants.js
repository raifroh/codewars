// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.




//parameters: a string
//return: the count of consonants aka NOT a,e,i,o,u. Make all lowercase
//example 'XaeiouX'), 2, only two letters are not consonants. 


const consonantCount = str => {
    //first make the string lowercase and then we will splti it into an array
    let newArr = str.toLowerCase().split('')
    //define total we update
    let total = 0
    //make list
    const list = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    //for loop checking against list
    //otherwise i++
    //return i
    for(i = 0; i < newArr.length; i++){
      //had to think of it the other way around
      //newArr[i] isn't an array, its a value of an array
      //so grab the list, see if newArr[i] is in it, and if so total++
      if(list.includes(newArr[i])){
        total++
      } else{continue}
    }
    return total
  }