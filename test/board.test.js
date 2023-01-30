const board = require('../src/board');

describe('Board with mines of size n x m', () => {
  it('should initialize a board of size 3 x 3', () => {
    const boardResult = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(board()).toStrictEqual(boardResult);
  });
});
