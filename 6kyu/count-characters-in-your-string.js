// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//parameters = a string
//return = an object literal with a count of numbers like so a: 2, b:1
//example see left


const count =  string => {  
  //split into array
  let arr = string.split('')
  //create empty object
  let result = {};

for (i = 0; i < arr.length; i++)
  //result needs to be followed by [] otherwise it is read as a function
  result[arr[i]] = arr.filter(x => x === arr[i]).length;

  return result;
}