function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    const root = i ** 0.5;
    if (Number.isInteger(root)) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
