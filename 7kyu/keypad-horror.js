// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

//parameters = string
//rreturn a string 
//example see left
//psuedo code= split into array and do big if statement


const computerToPhone = numbers => {
  let arr = numbers.split('').map(x => Number(x))
  for(i = 0; i < arr.length; i++){
    if(arr[i] === 7){
      arr[i] = 1
    } else if(arr[i] === 8){
      arr[i] = 2
    } else if(arr[i] === 9){
      arr[i] = 3
    } else if(arr[i] === 1){
      arr[i] = 7
    } else if(arr[i] === 2){
      arr[i] = 8
    } else if(arr[i] === 3){
      arr[i] = 9
    }
  }
  return arr.join('')
}