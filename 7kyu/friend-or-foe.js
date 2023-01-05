//Parameters = just an array with strings in it
//R= return just the 4 character strings
//E= (["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])


const friend = friends => {
    let filtered = friends.filter(fourLetters => fourLetters.length === 4)
    return filtered
  }
  