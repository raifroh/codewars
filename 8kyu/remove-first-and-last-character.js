// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//parameter a string
//return a stinrg
//example see tests


const removeChar = str => {
    let arr = str.split('')
    let newArr = []
    for(i = 0; i < arr.length; i++){
      if(i === 0 || i === arr.length-1){
        continue
      }else{
        newArr.push(arr[i])
      }
    }return newArr.join('')
  }
  
  
  
  