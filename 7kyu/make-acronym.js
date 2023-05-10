// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

//parameters a string
//return a string
//example see left
//psuedo code loop through or just use a map to keep every 0th character, touppercase, join


const toAcronym = inp => inp.split(' ').map(x => x[0].toUpperCase()).join('')