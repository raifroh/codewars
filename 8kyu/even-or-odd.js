//Create a function that takes an integer as an argument and returns 
//"Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = num => num % 2 === 0 ? 'Even':'Odd';

console.log(evenOrOdd(2))

//or 
// function evenOrOdd(num){
//     if(num % 2 === 0){
//         return 'Even'
//     } else {return 'Odd'}
// }