const {
  mineSweeperMarkMine,
  mineSweeperClearSquare,
  boardStateCountAdjacent,
} = require('../src/mineSweeper');

const Board = require('../src/board');

describe('Mine Sweeper can mark with a flag a mine in the board', () => {
  it('Should include a mark in the board when Mine Sweeper mark position 2,2 of the board', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', '', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    const boardResult = [
      ['M', '', ''],
      ['', 'F', ''],
      ['', '', 'M'],
    ];
    expect(mineSweeperMarkMine(1, 1, board).board).toStrictEqual(boardResult);
  });
});

describe('Mine Sweeper can clear a square in the board with not a bomb', () => {
  it('Should clear a square in the board with position 0,1 that does not contain a bomb', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', '', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    const boardResult = [
      ['M', 2, ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(mineSweeperClearSquare(0, 1, board).board).toStrictEqual(
      boardResult,
    );
  });
});

describe('Mine Sweeper will lost if it clear a square with a bomb', () => {
  it('Should clear a square in the board with position 1,1 tand it will lost', () => {
    const boardMessageResult = 'You lost';
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', '', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(mineSweeperClearSquare(1, 1, board)).toStrictEqual(
      boardMessageResult,
    );
  });
});

describe('Mine Sweeper can clear a square in the board with not a bomb and it should say the the adjacent at top', () => {
  it('Should clear a square in the board with position 1,1 and it should say number of bombs adjacent at top', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', 'M', ''],
      ['', '', ''],
      ['', '', 'M'],
    ];
    expect(boardStateCountAdjacent(1, 1, board)).toStrictEqual(3);
  });
});

describe('Mine Sweeper can clear a square in the board with not a bomb and it should say the the adjacent rigth and down', () => {
  it('Should clear a square in the board with position 1,1 and it should say number of bombs adjacent rigth and down', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', '', 'M'],
      ['', '', 'M'],
      ['', 'M', ''],
    ];
    expect(boardStateCountAdjacent(1, 1, board)).toStrictEqual(3);
  });
});

describe('Mine Sweeper can clear a square in the board with not a bomb and it should say the the adjacent left and down', () => {
  it('Should clear a square in the board with position 1,1 and it should say number of bombs adjacent left and down', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', '', ''],
      ['M', '', ''],
      ['M', 'M', ''],
    ];
    expect(boardStateCountAdjacent(1, 1, board)).toStrictEqual(3);
  });
});
