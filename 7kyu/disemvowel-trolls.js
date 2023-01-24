// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//parameters a string
//return a string with no vowels (a,e,i,o,u)
//examples This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
    //easiest way is to split it
    //run for loop and if it is a vowel, skip
    //otherwise push to new arr
    //join and return new arr
    let newArr = str.split('')
    let emptyArr = []
    for(i = 0; i < newArr.length; i++){
      if(newArr[i] === 'a' ||newArr[i] === 'e' ||newArr[i] === 'i'||newArr[i] === 'o'||newArr[i] === 'u'||newArr[i] === 'A'||newArr[i] === 'E'||newArr[i] === 'I'||newArr[i] === 'O'||newArr[i] === 'U' )
        {continue}
      else{emptyArr.push(newArr[i])}
    }
    return emptyArr.join('')
    }