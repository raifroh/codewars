// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//parameters = a string or array
//return = an array of non consecutive items in original order
//example = uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']



const uniqueInOrder = iterable => {
    //your code here - remember iterable can be a string or an array
    //new array
    let finalArr = []
    //first logical test is to see if array
    let workingArr = iterable
      //if not array then make it an array
    if(Array.isArray(iterable) === false){
      workingArr = iterable.split('')
    }
      //then for loop where we push to new arr if iterable[i] != iterable[i+1]
  
    for(i = 0; i < iterable.length; i++){
      if(iterable[i] != iterable[i+1]){
        finalArr.push(iterable[i])
      }
    }
    return finalArr
  }