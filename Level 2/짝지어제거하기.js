function solution(s) {
  const stack = [];
  for (let c of s) {
    if (stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
