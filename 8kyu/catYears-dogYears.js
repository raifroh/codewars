// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//p a number
//r an array
//e see left and test


const humanYearsCatYearsDogYears = humanYears => {

    const catYears = years => {
      if(humanYears > 2){
        return 15 + 9 + (humanYears-2)*4
      }else if(humanYears === 1){
        return 15
      }else{return 24}
    }
    let cat = catYears(humanYears)
    
    const dogYears = years => {
      if(humanYears > 2){
        return 15 + 9 + (humanYears-2) * 5
      }else if(humanYears === 1){
        return 15
      }else{return 24}
    }
    
    let dog = dogYears(humanYears)
    
    return [humanYears,cat,dog];
  }
  