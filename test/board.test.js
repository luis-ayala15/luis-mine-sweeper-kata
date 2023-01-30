const Board = require('../src/board');

describe('Board with mines of size n x m', () => {
  it('should initialize a board of size 3 x 3', () => {
    const boardResult = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    const board = new Board();
    expect(board.board).toStrictEqual(boardResult);
  });
});

describe('Board initialization with mines', () => {
  it('should initialize a board of size 3 x 3 with mines', () => {
    const board = new Board();
    expect(board.initializeBoardWithMines().board.toString()).toContain('M');
  });
});

describe('Board initialization with the total of mines', () => {
  it('should say the total number of mines in the board', () => {
    const board = new Board();
    expect(board.initializeBoardWithMines().totalBombs).toStrictEqual(3);
  });
});

describe('Board initialization with the total of square missing to clear', () => {
  it('should say the state of total number of squares missing to clear and win the game', () => {
    const board = new Board();
    expect(board.initializeBoardWithMines().totalSquareMissing).toStrictEqual(
      6,
    );
  });
});
