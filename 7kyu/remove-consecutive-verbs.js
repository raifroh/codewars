// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
//params a string
//return a string duplicates removed
//example see left
//if arr[i] === arr[i+1], skip.

const removeConsecutiveDuplicates = string => {
  let arr = string.split(' ')
  let newArr = []
  for(i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
      continue
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr.join(' ')
}