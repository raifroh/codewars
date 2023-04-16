// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)
//parameters = a string
//return a string, joined
//example see left
//psuedo code just uppercase the first letter then join it all
//do this via the index aka arr[i][0] and slice


String.prototype.camelCase=function(){
    console.log(this)
    let arr = this.split(' ')
    for(i = 0; i< arr.length; i++){
      if(arr[i] === "" || arr[i] === " "){
        continue
      }else{
      arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)}
    }
    console.log(arr.join(''))
    return arr.join('')
  }