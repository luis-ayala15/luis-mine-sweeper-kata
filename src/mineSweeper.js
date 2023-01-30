const { initializeBoardWithMines } = require('../src/board');

const mineSweeperMarkMine = (n, m) => {
  const board = initializeBoardWithMines();
  board[n][m] = 'F';
  return board;
};

const mineSweeperClearSquare = (n, m) => {
  const board = initializeBoardWithMines();
  if (board[n][m] === 'M') return 'Yout lost';
  board[n][m] = 'C';
  return board;
};

module.exports = { mineSweeperMarkMine, mineSweeperClearSquare };
