// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

//parameters = an array of objects
//return true or false depending on whether the group is diverse or not
//example see left
//psuedo code
//look through this with a forEach? 
//in the category, then newArr.push a relevant string
//if newArr includes all the ages then we return true

const isAgeDiverse = list => {
    let newArr = []
    list.forEach((element, index) => {
      if(element.age > 10 && element.age < 20){
        newArr.push('teen')
      }else if(element.age > 19 && element.age < 30){
        newArr.push('twenties')
      }else if(element.age > 29 && element.age < 40){
        newArr.push('thirties')
      }else if(element.age > 39 && element.age < 50){
        newArr.push('forties')
      }else if(element.age > 49 && element.age < 60){
        newArr.push('fifties')
      }else if(element.age > 59 && element.age < 70){
        newArr.push('sixties')
      }else if(element.age > 69 && element.age < 80){
        newArr.push('seventies')
      }else if(element.age > 79 && element.age < 90){
        newArr.push('eighties')
      }else if(element.age > 89 && element.age < 100){
        newArr.push('nineties')
      }else if(element.age > 99){
        newArr.push('centenarian')
      }
    })
    
    if(newArr.includes('teen') && newArr.includes('twenties')&& newArr.includes('thirties')&& newArr.includes('forties')&& newArr.includes('fifties')&& newArr.includes('sixties')&& newArr.includes('seventies')&& newArr.includes('eighties')&& newArr.includes('nineties')&& newArr.includes('centenarian')){
      return true
    }else{ return false}
  
  }