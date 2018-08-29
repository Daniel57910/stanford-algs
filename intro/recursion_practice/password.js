class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    generatePermutation(attempt)
  }

}

function generatePermutation(arrayOfOptions) {
  permute(arrayOfOptions, 0, arrayOfOptions.length - 1)
}





module.exports = Password

function permute(alphabets, startIndex, endIndex) {
  if (startIndex === endIndex) {
    console.log(alphabets)
    for (i = 0; i < alphabets.length; i++) {
      console.log(`current iteration is ${alphabets.slice(0, i+1)}`)
    }
    return
  } 
  for (let i = startIndex; i <= endIndex; i++) {
    swap(alphabets, startIndex, i);
    permute(alphabets, startIndex + 1, endIndex);
    swap(alphabets, i, startIndex)
  }
}

function swap(alphabets, index1, index2) {
  var temp = alphabets[index1];
  alphabets[index1] = alphabets[index2];
  alphabets[index2] = temp;
}


