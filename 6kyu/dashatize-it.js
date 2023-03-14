// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

//parameters = num
//return = string
//example = see left


const dashatize = num => {
    let numArr = num.toString().replace('-','').split('').map(x => Number(x))
    console.log(numArr)
    for(i = 0; i<numArr.length; i++){
      if(numArr[i] % 2 != 0){
        numArr[i] = '-' + numArr[i] + '-'
      }else{
        continue
      }
    }
    let newArr = numArr.join('');
    let resplit = newArr.split('')
    if(resplit[0] === '-'){
      resplit.shift()
    };
    
    if(resplit[resplit.length-1] === '-'){
      resplit.pop()
    };
    
    if(num % 1 != 0){
      return 'NaN'
    }else{
        return resplit.join('').replace(/--/g, '-')
    }
    }