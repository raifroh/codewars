// Write a function that takes an array of numbers and returns
// the sum of the numbers. The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

function sum(numbers){
    let product = 0
    for(i = 0; i < numbers.length; i++){
        product = numbers[i] + product
    }
 return product
}

newArray = [1,2,3]

console.log(sum(newArray))

//or

function sum(numbers) {
    return numbers.reduce((a,b) => a + b, 0);
}

//remember to place the return in there