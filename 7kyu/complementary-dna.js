// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


//parameters a string
//return the string of complementary letters
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//example "ATTGC" --> "TAACG"

//we need to convert dna to an array
//create a blank array as well
//loop over this array
//if [i] === A then push a T
//if [i] === T then push an A
//if [i] === C then push a G
//if [i] === G then push a C




const DNAStrand = dna => {
    let newArr = []
    let dnaArr = dna.split('')
    console.log(dnaArr)
    
    for(i= 0; i<dnaArr.length; i++){
      if(dnaArr[i] === 'A'){
        newArr.push('T')
      } else if(dna[i] === 'T'){
        newArr.push('A')
      } else if(dna[i] === 'C'){
        newArr.push('G')
      } else if(dna[i] === 'G'){
        newArr.push('C')
      }
    }
    return newArr.join('')
    }