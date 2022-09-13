// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

//   Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

// Time: O(n) Space: O(n)
function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(i => i === elemToReplace ? i = substitutionElem : i);
}

// map equivalent to:
// for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === elemToReplace) {
//         inputArray[i] = substitutionElem;
//     }
// }
// return inputArray;
