const { Board, initializeBoardWithMines } = require('../src/board');

describe('Board with mines of size n x m', () => {
  it('should initialize a board of size 3 x 3', () => {
    const boardResult = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(Board()).toStrictEqual(boardResult);
  });
});

describe('Board initialization with mines', () => {
  it('should initialize a board of size 3 x 3 with mines', () => {
    const boardWithMines = [
      ['M', '', ''],
      ['', 'M', ''],
      ['', '', 'M'],
    ];
    expect(initializeBoardWithMines()).toStrictEqual(boardWithMines);
  });
});
