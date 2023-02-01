// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


function mxdiflg(a1, a2) {
    //we need to find the longest string of each
    //subtract by smallest string of other
    //so if a2 has the longest string of either array
    //subtract it from the smallest array of the other
    //or maybe its vice versa if one happens to have a significantly smaller array in it?
    //maybe array.map each element and convert them to their length?
  let a1Length = a1.map(x => x = x.length)
//   console.log(a1Length)//that worked
  let a2Length = a2.map(x => x = x.length)
//   console.log(a2Length)//success
  //lets get the min and max of each one, need to use spread aka ... syntax here I believe
  let a1Max = Math.max(...a1Length)
//   console.log(a1Max)//success via spread syntax
  let a2Max = Math.max(...a2Length)
  let a1Min = Math.min(...a1Length)
  let a2Min = Math.min(...a2Length)
  //now need to use if statements to find smallest number
  //need to deal with a1 or a2 being empty first
  //not handling these empty errors for some reason
  //need to check via length
  console.log(a1)
  console.log(a2)
  if(a1.length == 0 || a2.length == 0){
    return -1
  }else if(a1Max - a2Min > a2Max - a1Min){
    return a1Max - a2Min
  }else{return a2Max - a1Min}
}