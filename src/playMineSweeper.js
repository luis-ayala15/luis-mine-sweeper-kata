const Board = require('../src/board');
const { mineSweeperClearSquare } = require('../src/mineSweeper');

class PlayMineSweeper {
  constructor() {
    this.board = new Board();
    this.board.initializeBoardWithMines();
  }

  playMatch(n, m) {
    mineSweeperClearSquare(n, m, this.board);
    return this.board;
  }
}
module.exports = PlayMineSweeper;
