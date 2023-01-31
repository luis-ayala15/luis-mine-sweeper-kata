const mineSweeperMarkMine = (n, m, boardState) => {
  boardState.board[n][m] = 'F';
  return boardState;
};

const mineSweeperClearSquare = (n, m, boardState) => {
  if (boardState.board[n][m] === 'M') return 'You lost';

  boardState.board[n][m] = boardStateCountAdjacent(n, m, boardState);

  return boardState;
};

const clearAdjacent = (n, m, boardState) => {
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (n + 1 < nSize) {
    boardState.board[n + 1][m] = boardStateCountAdjacent(n + 1, m, boardState);
  }
  if (n - 1 >= 0) {
    boardState.board[n - 1][m] = boardStateCountAdjacent(n - 1, m, boardState);
  }
  if (m + 1 < mSize) {
    boardState.board[n][m + 1] = boardStateCountAdjacent(n, m + 1, boardState);
  }
  clearAdjacentSecondBatch(n, m, boardState);
  clearAdjacentThirdBatch(n, m, boardState);
  return boardState;
};

const clearAdjacentSecondBatch = (n, m, boardState) => {
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (m - 1 >= 0) {
    boardState.board[n][m - 1] = boardStateCountAdjacent(n, m - 1, boardState);
  }
  if (n + 1 < nSize && m + 1 < mSize) {
    boardState.board[n + 1][m + 1] = boardStateCountAdjacent(
      n + 1,
      m + 1,
      boardState,
    );
  }
  return boardState;
};

const clearAdjacentThirdBatch = (n, m, boardState) => {
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (n - 1 >= 0 && m - 1 >= 0) {
    boardState.board[n - 1][m - 1] = boardStateCountAdjacent(
      n - 1,
      m - 1,
      boardState,
    );
  }
  if (n - 1 >= 0 && m + 1 < mSize) {
    boardState.board[n - 1][m + 1] = boardStateCountAdjacent(
      n - 1,
      m + 1,
      boardState,
    );
  }
  if (n + 1 < nSize && m - 1 >= 0) {
    boardState.board[n + 1][m - 1] = boardStateCountAdjacent(
      n + 1,
      m - 1,
      boardState,
    );
  }
  return boardState;
};

const boardStateCountAdjacent = (n, m, boardState) => {
  let countAdjacent = 0;
  const nSize = boardState.board.length;
  if (n + 1 < nSize && boardState.board[n + 1][m] === 'M') {
    countAdjacent++;
  }
  if (n - 1 >= 0 && boardState.board[n - 1][m] === 'M') {
    countAdjacent++;
  }
  countAdjacent = boardStateCountAdjacentSecondBatch(
    n,
    m,
    boardState,
    countAdjacent,
  );
  countAdjacent = boardStateCountAdjacentThirdBatch(
    n,
    m,
    boardState,
    countAdjacent,
  );
  countAdjacent = boardStateCountAdjacentFourBatch(
    n,
    m,
    boardState,
    countAdjacent,
  );
  return countAdjacent;
};

const boardStateCountAdjacentSecondBatch = (
  n,
  m,
  boardState,
  countAdjacent,
) => {
  const mSize = boardState.board[0].length;
  if (m + 1 < mSize && boardState.board[n][m + 1] === 'M') {
    countAdjacent++;
  }
  if (m - 1 >= 0 && boardState.board[n][m - 1] === 'M') {
    countAdjacent++;
  }
  return countAdjacent;
};

const boardStateCountAdjacentThirdBatch = (n, m, boardState, countAdjacent) => {
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (
    n + 1 < nSize &&
    m + 1 < mSize &&
    boardState.board[n + 1][m + 1] === 'M'
  ) {
    countAdjacent++;
  }
  if (n - 1 >= 0 && m - 1 >= 0 && boardState.board[n - 1][m - 1] === 'M') {
    countAdjacent++;
  }
  return countAdjacent;
};

const boardStateCountAdjacentFourBatch = (n, m, boardState, countAdjacent) => {
  const nSize = boardState.board.length;
  const mSize = boardState.board[0].length;
  if (n - 1 >= 0 && m + 1 < mSize && boardState.board[n - 1][m + 1] === 'M') {
    countAdjacent++;
  }
  if (n + 1 < nSize && m - 1 >= 0 && boardState.board[n + 1][m - 1] === 'M') {
    countAdjacent++;
  }
  return countAdjacent;
};

module.exports = {
  mineSweeperMarkMine,
  mineSweeperClearSquare,
  boardStateCountAdjacent,
  clearAdjacent,
};
