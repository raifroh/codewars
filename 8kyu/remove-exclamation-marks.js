function removeExclamationMarks(s) {
    return s.replace(/!/g, "") //this is a regular expression that also globally removes the exclamation mark!
  }
  
  console.log(removeExclamationMarks("Hello World!!"))
  