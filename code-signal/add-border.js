// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example

// For

// picture = ["abc",
//   "ded"]
// the output should be

// solution(picture) = ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]
// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.string picture

// A non - empty array of non - empty equal - length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
//   1 ≤ picture[i].length ≤ 100.

//   [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

// my solution
function solution(picture) {
  const width = picture[0].length;
  const height = picture.length;
  const ast = '*';
  const border = ast.repeat(width + 2);
  const newArr = picture.map(item => ast + item + ast);
  newArr.push(border);
  newArr.unshift(border);
  return newArr;
}

// optimal solution
function solution(picture) {
  var width = picture[0].length + 2;
  return [
    '*'.repeat(width),
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ];
}
