class TicTacToe {
  var tiles: Array[String] = Array("1","2","3","4","5","6","7","8","9")
  var winner = false
  var turn = 0

  def print() {
    var i = 0
    for (i <- 0 until tiles.length by 3) {
      println(
        "[" + tiles(i) + "] " +
        "[" + tiles(i + 1) + "] " +
        "[" + tiles(i + 2) + "] "
      )
    }
  }

  def success() {
    if (
      (tiles(0) == tiles(1) && tiles(1) == tiles(2)) ||
      (tiles(3) == tiles(4) && tiles(4) == tiles(5)) ||
      (tiles(6) == tiles(7) && tiles(7) == tiles(8)) ||
      (tiles(0) == tiles(3) && tiles(3) == tiles(6)) ||
      (tiles(1) == tiles(4) && tiles(4) == tiles(7)) ||
      (tiles(2) == tiles(5) && tiles(5) == tiles(8)) ||
      (tiles(0) == tiles(4) && tiles(4) == tiles(8)) ||
      (tiles(2) == tiles(4) && tiles(4) == tiles(6))
    )
    { winner = true }
  }
}

var board = new TicTacToe

println("X goes first" + "\n")

while (board.winner != true) {
  println ("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  board.print
  if (board.turn < 1) {
    println("\n" + "X, please choose a space")
    var xchoice = Console.readInt
    board.tiles(xchoice - 1) = "X"
    board.turn += 1
  } else {
    println("\n" + "O, please choose a space")
    var ochoice = Console.readInt
    board.tiles(ochoice - 1) = "O"
    board.turn -= 1
  }
  board.success
}

if (board.turn < 1) {
  board.print
  println("Tic Tac Toe! O Wins!!!")
} else {
  board.print
  println("Tic Tac Toe! X Wins!!!")
}
