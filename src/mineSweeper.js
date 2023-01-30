const mineSweeperMarkMine = (n, m, boardState) => {
  boardState.board[n][m] = 'F';
  return boardState;
};

const mineSweeperClearSquare = (n, m, boardState) => {
  if (boardState.board[n][m] === 'M') return 'You lost';

  boardState.board[n][m] = boardStateCountAdjacent(n, m, boardState);

  return boardState;
};

const boardStateCountAdjacent = (n, m, boardState) => {
  let countAdjacent = 0;
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (n + 1 < nSize) {
    if (boardState.board[n + 1][m] === 'M') {
      countAdjacent++;
    }
  }
  if (n - 1 >= 0) {
    if (boardState.board[n - 1][m] === 'M') {
      countAdjacent++;
    }
  }
  if (m + 1 < mSize) {
    if (boardState.board[n][m + 1] === 'M') {
      countAdjacent++;
    }
  }
  if (m - 1 >= 0) {
    if (boardState.board[n][m - 1] === 'M') {
      countAdjacent++;
    }
  }
  if (n + 1 < nSize && m + 1 < mSize) {
    if (boardState.board[n + 1][m + 1] === 'M') {
      countAdjacent++;
    }
  }
  if (n - 1 >= 0 && m - 1 >= 0) {
    if (boardState.board[n - 1][m - 1] === 'M') {
      countAdjacent++;
    }
  }
  if (n - 1 >= 0 && m + 1 < mSize) {
    if (boardState.board[n - 1][m + 1] === 'M') {
      countAdjacent++;
    }
  }
  if (n + 1 < nSize && m - 1 >= 0) {
    if (boardState.board[n + 1][m - 1] === 'M') {
      countAdjacent++;
    }
  }
  return countAdjacent;
};

module.exports = {
  mineSweeperMarkMine,
  mineSweeperClearSquare,
  boardStateCountAdjacent,
};
