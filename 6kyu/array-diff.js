// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//parameters two arrays
//return the first array with no mention of any items that are present in array b
//in same order
//example arrayDiff([1,2],[1]) == [2]

//list = b
//string = a

const arrayDiff = (a, b) => {
    if(b === []){return a}
    else{return a.filter(x => !b.includes(x))}
   
 }