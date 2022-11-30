// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this 
// number within an array in reverse order.

function digitize(n) {
  //code here
  return Array.from(String(n), Number).reverse()
}

console.log(digitize(342))


//or function digitize(n)
//return String(n).split('').map(Number).reverse()