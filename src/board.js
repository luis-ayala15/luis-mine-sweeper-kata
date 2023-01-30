class Board {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.totalBombs = 0;
    this.totalSquareMissing = this.board.length * this.board[0].length;
  }

  initializeBoardWithMines() {
    const numberOfBombs = this.board.length;
    for (let i = 0; i < numberOfBombs; i++) {
      const n = Math.floor(Math.random() * numberOfBombs);
      const m = Math.floor(Math.random() * numberOfBombs);
      this.board[n][m] = 'M';
    }
    this.totalBombs = numberOfBombs;
    this.totalSquareMissing = this.totalSquareMissing - numberOfBombs;
    return this;
  }
}

module.exports = Board;
