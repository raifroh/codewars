//parameters a string
//return a string
//example see left


const reverseWords = str => {
    let arr = str.split(' ')
    console.log(arr)
    for(i = 0; i < arr.length; i++){
      arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
  }