// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

//parameters = a string and a string to always be in lowercase
//return string1 in title case
//examples see left
//psuedo code split into array, split by the space
//and let arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)


function titleCase(title, minorWords) {
  let str1 = title.toLowerCase().split(' ')
  let str2 = minorWords ? minorWords.toLowerCase().split(' ') : [];
  
  for(i = 0; i < str1.length; i++){
    if(str2.includes(str1[i]) && str1.indexOf(str1[i]) != 0){
      continue
    }else{
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
    }
  }
  return str1.join(' ')
}
