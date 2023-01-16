// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


//parameters= a list of digits(an array?)
//return = smallet num possible. 
//example = minValue({5, 7, 5, 9, 7})  ==> return (579)


//plan to remove duplicates then sort


const minValue = values => {
    //can filter via indexOf and lastIndexOf
    //check against new arr to see if value in there, if so continue via for loop
    let newArr = []
    
    for(i = 0; i < values.length; i++){
      if(newArr.includes(values[i])){
        continue
      } else{newArr.push(values[i])}
    }
    return Number(newArr.sort((x,y) => x-y).join(''))
    
  
  }