// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//parameters = a string
//return = a count as number
//example= see test



const getCount= str => {
  let vowels = ['a','e','i','o','u']
  //split into array
  let arr = str.toLowerCase().split('')
  //create empty arr
  let newArr = []
  //for loop
  for(i = 0; i < arr.length; i++){
    //if not vowel, continue
    //else push to new arr
    if(vowels.includes(arr[i])){
      newArr.push(arr[i])
    }else{ continue
         }
    
  }
  return newArr.length
}