// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//pa string
//return a string
//example see left


const switcheroo= x => {
    let newArr = []
    x.split('').map(x => x === 'a' ? newArr.push('b'): x === 'b' ? newArr.push('a'):newArr.push('c')) 
    return newArr.join('')
  }