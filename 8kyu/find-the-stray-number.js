// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers){
    let sorted = numbers.sort((a,b) => a-b);
    for(i = 0; i<=numbers.length; i++){
        if(numbers[i] != numbers[1])//must be the [1] place since the odd number out could be the smallest
        {
            return numbers[i]
        }
    }
}