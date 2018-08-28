const wordAxis = require('./wordAxis')
class Game {
  
  crosswordPuzzle(crossword, words) {
    this.crossword = crossword
    solve(0, 0, crossword)
  }
  
}

function solve(y, x, crossword) {

  console.log(`x = ${x}, y = ${y}`)
  console.log(`crossword = ${crossword}`)
  if (!validMoves(crossword)) {
    return
  }

  if (crossword[y][x] == "-") {
    crossword[y][x] = "!"
  }

  if (x < 2) {
    return solve(y, x + 1, crossword)
  }

  if (y < 2) {
    return solve(y + 1, x , crossword)
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