Notes

Labels
β done
π§ WIP
β ERROR
TODO:

Domain:
Board: a board of size 3 by 3 that should be define at the begining of the game, this board will store if it contain a mine or not, it should be initialize with bombs and it can change of size

Clear square: it should say if there was a mine or if there is not it should return the number of mines around, if a square is cleared with 0 neighboring bombs, all its neighbors will automatically open; recursively.

Flags: a mark that can say if there is a bomb in the

Mine: it's in the board at position x,y and it should end the game if we step in a mine

Neighbours: all adjacent above, below, left, right, and all 4 diagonals squares in the board

POMODORO 1
β Create Domain of mine sweeper
β Create Backlog of mine sweeper with test cases
β Rename Test and files
β Create board test
β commit and push

POMODORO 2
WTF 1: The board only contain Strings

β Create test to initialize the number of bombs in the board
β Create test to mark a mine in the board with a flag
β Create a test to clear a square in the board that is not a bomb
β Create a test to clear a square in the board that is a bomb
β commit and Push

POMODORO 3
WTF 2: The board is not a class, the board is harcoded

β Change test to a board class into a class
β Change test to initialize the board to a random bomb generator
β Create test to check the number of bombs in the board
β Create test to check the number of total square missing
β Refactor test to user a board state
β Return the number of adjacent bombs after clearing a square
β commit and push

POMODORO 4
WTF 2 coverage is not 100, boardStateCountAdjacent complexity is 22
β Improve coverage from 88 to 100
β create test to Clear adjacent squares if a square with no adjacent mines is clear
β check and reduce complexity
β Create test to play mineSweeper game
βcommit and push
