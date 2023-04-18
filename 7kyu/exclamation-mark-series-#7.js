// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"


//parameters = a string
//rreturn a string without any words containing an exclamation
//example see left
//psuedo code split into array and remove if arr[i].incldues(!)




const remove = string => {
    let newArr = []
    let arr = string.split(' ')
    for(i = 0; i < arr.length; i++){
      if(arr[i].split('').filter(x => x.includes('!')).length === 1){
         continue
      }else{
        newArr.push(arr[i])
      }
    }
    return newArr.join(' ')
  }