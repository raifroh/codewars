// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//parameters = a string
//return = name, capitalized frst letter with rest lowercase, starting with Hello and ending with !
//example see left
//psuedo code = use a template literal after splitting the name into an array
//and capitalizing first letter

const greet = name => {
    return `Hello ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`
  
  };