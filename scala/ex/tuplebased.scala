class TicTacToe {
  var tiles = (1,2,3,4,5,6,7,8,9)
  var winner = false

  def print() {
    var i = 0
    for (i <- 0 until tiles.productArity by 3) {
      println(
        "[" + tiles.productElement(i) + "] " +
        "[" + tiles.productElement(i + 1) + "] " +
        "[" + tiles.productElement(i + 2) + "] "
      )
    }
  }

  def success() {
    if (
      tiles._1 == tiles._2 == tiles._3 ||
      tiles._4 == tiles._5 == tiles._6 ||
      tiles._7 == tiles._8 == tiles._9 ||
      tiles._1 == tiles._4 == tiles._7 ||
      tiles._2 == tiles._5 == tiles._8 ||
      tiles._3 == tiles._6 == tiles._9 ||
      tiles._1 == tiles._5 == tiles._9 ||
      tiles._3 == tiles._5 == tiles._7
    )
    { winner = true }
  }
}

var board = new TicTacToe

while (board.winner != true) {
  board.print
  println("\n" + "please choose a space")
  var choice = Console.readInt
  var tiles: (String, String, String, String, String, String, String, String, String)
    = tiles.copy(tiles.productElement(choice) = "X")
  // board.tiles.productElement(choice) = "X"
  board.success
}

println("Tic Tac Toe!")

