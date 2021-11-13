function solution(n, times) {
  let answer = 0;
  let right = n * Math.max(...times); // 최대로 걸릴 수 있는 시간
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let possible = 0;
    for (let time of times) {
      // 각 심사관
      if (possible > n) break;
      possible += Math.floor(mid / time); // mid 내에 심사관의 처리수
    }
    if (possible >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
