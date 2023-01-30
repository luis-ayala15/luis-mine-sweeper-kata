const Board = () => {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  return board;
};

const initializeBoardWithMines = () => {
  const boardWithMines = Board();
  boardWithMines[0][0] = 'M';
  boardWithMines[1][1] = 'M';
  boardWithMines[2][2] = 'M';
  return boardWithMines;
};

module.exports = { Board, initializeBoardWithMines };
