// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

//parameters array of numsd
//return: a number
//example code: see left
//psuedo code: use a map to do x => x*x and then just reduce the array and then sqrt it then divide
//by 2


const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(arr.map(x => x * x).reduce((x,y) => x+y, 0))/2)
  }