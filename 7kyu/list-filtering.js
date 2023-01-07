// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//parameters an array of integers and strings
//return Return a new array with the strings filtered out
//ex filter_list([1,2,'a','b']) == [1,2]



const filter_list = list => {
    //create a new Arr to push into like the other codewars
    let newArr = []
    //start the for loop
    for(i = 0; i < list.length; i++){
      //run past strings
      if(typeof list[i] === 'string'){
        continue
      } 
      //now grab what we want and push it
      else{
        newArr.push(list[i])
      }
    }
    return newArr
  }