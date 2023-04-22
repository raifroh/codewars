// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!

// Notes:

// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid
// Enjoy! (づ｡◕‿‿◕｡)づ

//parameters = arr of strings
//return sorted arr of strings
//examples see left
//psuedo code basically assign values via an object?
//then sort based on true or false, aka sort for true, and sort.reverse for false
//then change back into emotions



const sortEmotions = (arr, order) => {
    const values = {
      ':D' : 1,
      ':)' : 2,
      ':|' : 3,
      ':(' : 4,
      'T_T': 5
    }
    
    for(i = 0; i < arr.length; i++){
      arr[i] = values[arr[i]]
    }
    
    let sortedArr 
    if(order == true){
      sortedArr = arr.sort()
    }else if(order == false){
      sortedArr = arr.sort().reverse()
    }
      const returnValues = {
       1 : ':D',
       2 : ':)',
       3 : ':|',
       4 : ':(',
       5 : 'T_T',
    }
    for(i = 0; i < arr.length; i++){
      sortedArr[i] = returnValues[sortedArr[i]]
    }
    return sortedArr
  }