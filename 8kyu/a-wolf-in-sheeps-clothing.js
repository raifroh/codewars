// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//parameters an array
//return the statements
//example see left


const warnTheSheep = queue => {
    if(queue[queue.length-1] === 'wolf'){
      return "Pls go away and stop eating my sheep"
    }else{
      return `Oi! Sheep number ${queue.length - queue.indexOf('wolf') - 1}! You are about to be eaten by a wolf!`
    }
  }