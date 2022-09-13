// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]

// Time: O(n^2) Space: O(n^2)
function solution(matrix) {
  const board = [];
  for (let y = 0; y < matrix.length; y++) {
    const row = [];
    for (let x = 0; x < matrix[y].length; x++) {
      row[x] = 0;
    }
    board.push(row);
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === true) {
        if (y < matrix.length - 1) { board[y + 1][x]++; }
        if ((y < matrix.length - 1) && (x < matrix[y].length - 1)) { board[y + 1][x + 1]++; }
        if ((x > 0) && (y < matrix.length - 1)) { board[y + 1][x - 1]++; }
        if (x > 0) { board[y][x - 1]++; }
        if (x < matrix[y].length - 1) { board[y][x + 1]++; }
        if (y > 0) { board[y - 1][x]++; }
        if (y > 0 && x > 0) { board[y - 1][x - 1]++; }
        if ((y > 0) && (x < matrix[y].length - 1)) { board[y - 1][x + 1]++; }
      }
    }
  }

  return board;
}
