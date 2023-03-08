// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

//p a string
//return a string
//example see left

function kebabize(str) {
    let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    
    let arr = str.split('')
    let newArr = []
    
    for(i = 0; i < arr.length; i++){
      if(upperCase.includes(arr[i])){
        arr[i] = '-' + arr[i]
      }
    }
    
    for(j = 0; j < arr.length; j++){
      if(numbers.includes(arr[j])){
        continue
      }else{
        newArr.push(arr[j])
      }
    }
    
  //   if(newArr[0] === '-')
    let finalArr = newArr.join('').split('')
    
    for(k = 0; k < newArr.length; k++){
      if(finalArr[0] === '-'){
        finalArr.shift()
      }
    }
    return finalArr.join('').toLowerCase()
  
    
    }