function solution(s) {
  let stack = [];
  for (let elem of s) {
    if (elem === "(") {
      // 열린괄호
      stack.push(elem);
    } else {
      // 닫힌 괄호
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}
