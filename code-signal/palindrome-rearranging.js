// Given a string, find out if its characters can be rearranged to form a palindrome.

//   Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function solution(inputString) {
  let count = 0;
  const arr = inputString.split('').sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      i++;
    } else {
      count++;
    }
  }
  if (count > 1) return false;
  else return true;
}
