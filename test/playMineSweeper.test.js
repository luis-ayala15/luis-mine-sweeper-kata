const PlayMineSweeper = require('../src/playMineSweeper');

describe('Start the game and play mineSweeper', () => {
  it('Should start the game and start a clearing a squeare', () => {
    const game = new PlayMineSweeper();
    expect(game.playMatch(0, 0)).toBeTruthy();
  });
});
