function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2) {
      n -= 1;
      answer++;
    } else {
      n /= 2;
    }
  }
  return answer;
}
