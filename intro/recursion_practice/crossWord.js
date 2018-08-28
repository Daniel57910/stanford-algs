let crossWord = []
//var1 = 'X', 'X', 'X', 'X', '-', '-', '-', '-'
//var2 = 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X'
//var3 = 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X'
crossWord[0] = new Array('X', 'X', 'X', 'X', '-', '-', '-', '-')
crossWord[1] = new Array('X', 'X', 'X', 'X', '-', 'X', 'X', 'X')
crossWord[2] = new Array('X', 'X', 'X', 'X', '-', 'X', 'X', 'X')

console.log(crossWord)
console.log(crossWord[0][5])
findLegalMoves(0, 0, crossWord)

function findLegalMoves(x, y, crossWord) {

  console.log(`x = ${x}, y = ${y}`)
  console.log(crossWord)
  console.log(`[X][Y] = ${crossWord[x][0]}`)
  if (!crossWordEmpty(crossWord)) {
    return
  }

  if (x >= 10) {
    findLegalMoves(0, y + 1, crossWord)
  }

  if (y >= 10) {
    findLegalMoves(x + 1, 0, crossWord)
  }

   if (crossWord[x][y] === '-') {
     console.log('legal move')
     crossWord[x][y] = "!"
     findLegalMoves(x + 1, y, crossWord)
     findLegalMoves(x, y + 1, crossWord)
   }

  findLegalMoves(x + 1, y, crossWord)
  findLegalMoves(x, y + 1, crossWord)
  
}

function crossWordEmpty(crossWord) {
  let i = j = 0
  for (i; i < 10; i++) {
    for (j; j < 10; j++) {
      if (crossWord[i][j] === '-') {
        return true
      }
    }
  }
  return false
}

function isLegal(x, y, crossWord) {
  return crossWord[x][y]
}