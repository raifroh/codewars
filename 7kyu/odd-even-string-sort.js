// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

//parameters = a string
//return a string
//example see left
//psuedo code
//filter the string between two variables then concat
//one odd one even index


const sortMyString = (S) => {
    let odd = S.split('').filter((e,i) => i % 2 != 0).join('')
    let even = S.split('').filter((e,i) => i % 2 === 0).join('') + ' '
    return even.concat(odd)
 }