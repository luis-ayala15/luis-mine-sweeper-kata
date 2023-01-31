const {
  mineSweeperMarkMine,
  mineSweeperClearSquare,
  boardStateCountAdjacent,
  clearAdjacent,
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

describe('Mine Sweeper clear a square at position 2,2', () => {
  it('Should not throw an error trying to search an undefined square out of the board', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', '', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(boardStateCountAdjacent(2, 2, board)).toStrictEqual(1);
  });
});

describe('Mine Sweeper clear a square at position 0,0', () => {
  it('Should not throw an error trying to search an undefined square of -1', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', '', 'M'],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(boardStateCountAdjacent(0, 0, board)).toStrictEqual(1);
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

describe('Mine Sweeper can clear a square with no adjacent mines at down left', () => {
  it('Should clear all adjacent squares at down left', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', '', ''],
      ['M', '', ''],
      ['M', 'M', ''],
    ];
    const boardResult = [
      ['', 1, ''],
      ['M', 3, 1],
      ['M', 'M', ''],
    ];
    expect(clearAdjacent(0, 2, board).board).toStrictEqual(boardResult);
  });
});

describe('Mine Sweeper can clear a square with no adjacent mines at top rigth', () => {
  it('Should clear all adjacent squares at top rigth', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', 'M', 'M'],
      ['', '', 'M'],
      ['', '', ''],
    ];
    const boardResult = [
      ['', 'M', 'M'],
      [1, 3, 'M'],
      ['', 1, ''],
    ];
    expect(clearAdjacent(2, 0, board).board).toStrictEqual(boardResult);
  });
});

describe('Mine Sweeper can clear a square with no adjacent mines at left', () => {
  it('Should clear all adjacent squares at left', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['M', '', ''],
      ['M', '', ''],
      ['M', '', ''],
    ];
    const boardResult = [
      ['M', 2, 0],
      ['M', 3, ''],
      ['M', 2, 0],
    ];
    expect(clearAdjacent(1, 2, board).board).toStrictEqual(boardResult);
  });
});

describe('Mine Sweeper can clear a square with no adjacent mines at rigth', () => {
  it('Should clear all adjacent squares at rigth', () => {
    const board = new Board();
    board.initializeBoardWithMines();
    board.board = [
      ['', '', 'M'],
      ['', '', 'M'],
      ['', '', 'M'],
    ];
    const boardResult = [
      [0, 2, 'M'],
      ['', 3, 'M'],
      [0, 2, 'M'],
    ];
    expect(clearAdjacent(1, 0, board).board).toStrictEqual(boardResult);
  });
});
