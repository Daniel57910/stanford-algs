const wordAxis = require('./wordAxis')
class Game {
  
  crosswordPuzzle(crossword, words) {
    this.crossword = crossword
    solve(0, 0, crossword, words)
    console.log(this.crossword)
  }
  
}

function solve(y, x, crossword, word) {

  console.log(`x = ${x}, y = ${y}`)
  console.log(`crossword = ${crossword}`)
  console.log(`word = ${word}`)
  if (word === '') {
    return
  }

  if (crossword[y][x] == "-") {
    crossword[y][x] = word[0]
    word = word.slice(1, word.length)
  }

  if (x < 2) {
    return solve(y, x + 1, crossword, word)
  }

  if (y < 2) {
    return solve(y + 1, x , crossword, word)
  }

}

function validMoves(crossword) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (crossword[j][i] === "-") {
        return true
      }
    }
  }
  return false
}
module.exports = Game