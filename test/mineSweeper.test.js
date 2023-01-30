const {
  mineSweeperMarkMine,
  mineSweeperClearSquare,
} = require('../src/mineSweeper');

describe('Mine Sweeper can mark with a flag a mine in the board', () => {
  it('Should include a mark in the board when Mine Sweeper mark position 2,2 of the board', () => {
    const board = [
      ['M', '', ''],
      ['', 'F', ''],
      ['', '', 'M'],
    ];
    expect(mineSweeperMarkMine(1, 1)).toStrictEqual(board);
  });
});

describe('Mine Sweeper can clear a square in the board with not a bomb', () => {
  it('Should clear a square in the board with position 0,1 that does not contain a bomb', () => {
    const board = [
      ['M', 'C', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(mineSweeperClearSquare(0, 1)).toStrictEqual(board);
  });
});

describe('Mine Sweeper will lost if it clear a square with a bomb', () => {
  it('Should clear a square in the board with position 1,1 tand it will lost', () => {
    const board = 'Yout lost';
    expect(mineSweeperClearSquare(1, 1)).toStrictEqual(board);
  });
});
