// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//parameters a number
//return a number
//example see left


function century(year) {
    let yearArr = year.toString().split('')
    console.log(yearArr)
    
    //math.ceil if last two numbers are not 0
    if(yearArr[yearArr.length-1] === '0' && yearArr[yearArr.length-2] === '0'){
      return Number(yearArr.slice(0,yearArr.length-2).join(''))
    }else{return Number(yearArr.slice(0, yearArr.length-2).join(''))+1}
      ;
    }