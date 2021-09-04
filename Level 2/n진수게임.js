function solution(n, t, m, p) {
  let answer = "";
  let num = 0;
  let count = 1;
  const rest = m === p ? 0 : p;
  while (true) {
    for (let c of num.toString(n)) {
      if (count % m === rest) answer += c;
      if (answer.length == t) return answer.toUpperCase();
      count++;
    }
    num++;
  }
}
