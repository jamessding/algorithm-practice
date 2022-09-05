// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//   Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Time: O(n) Space: O(n)
var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (arr.pop() !== '(') return false;
    } else if (s[i] === '}') {
      if (arr.pop() !== '{') return false;
    } else if (s[i] === ']') {
      if (arr.pop() !== '[') return false;
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length) {
    return false;
  }
  return true;
};
