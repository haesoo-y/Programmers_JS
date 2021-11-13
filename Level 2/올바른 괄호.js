function solution(s) {
  let stack = [];
  for (let elem of s) {
    if (elem === '(') {
      stack.push(elem);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
