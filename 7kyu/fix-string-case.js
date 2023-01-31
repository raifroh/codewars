// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

//parameters = string
//return new string in all upper or all lowercase
//example see left



function solve(s){
    let alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let arr = s.split('')
    let newArr = []
    //quickest way I see to do this is to split s into two arrays
    //or compare against big array of all lowercase letters and see which is bigger
    //if uppercase array is bigger then uppercase s and return it
    //or inverse
    //and if === then lowercase
      for(i = 0; i < arr.length; i++){
        if(alphabetUpperCase.includes(arr[i])){
          newArr.push(arr[i])
        }else{continue}
      }
      //new if comparison
      if(newArr.length > (arr.length - newArr.length)){
        return s.toUpperCase()
      }else{return s.toLowerCase()}
    
    }