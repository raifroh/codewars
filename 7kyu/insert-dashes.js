// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//parameters = a number
//return the number as a string with dashes between any double two odd digits
//example see below
//psuedo code basically above

const insertDash = num => {
    let arr = num.toString().split('').map(x => Number(x))
    console.log(arr)
    for(i = 0; i < arr.length; i++){
      if(i + 1 === arr.length){
        continue
      }
        else if(arr[i] % 2 != 0 && arr[i+1] % 2 != 0){
        arr[i] = arr[i] + '-'
      }
    }
    return arr.join('')
  }
  