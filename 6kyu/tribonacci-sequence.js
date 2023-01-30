// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]



//parameters = an array to start with, and how long the array should be (n)
//return an array up to n
//e see tests


const tribonacci = (signature,n) => {
  //we basically need something that loops through and if signature[i] === 0||1||2 then
  //newArr.push(signature [0],[1],[2]) 
  //otherwise newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3])
  let newArr = []
  for(i = 0; i < n; i++){
    if(i === 0 || i === 1 || i === 2){
      newArr.push(signature[i])
    }else{newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3])}
  }
  return newArr
}

//i = 3
//3- 1 = 2
//3-2 = 1
//3 - 3 =0