// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


//parameters a string
//return a string minus everything after the #
//example see left



const removeUrlAnchor = url => {
//I think I'm going to split this url into an array
//then for loop through it
//push to new empty arr
//if i === #, stop.
//return finalarr
let finalArr = []
let newArr = url.split('')
for(i = 0; i < newArr.length; i++){
  if(newArr[i] === '#'){
    break
  } else{
    finalArr.push(newArr[i])
  }
}
return finalArr.join('')
}