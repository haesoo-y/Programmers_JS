function solution(jobs) {
  let time = 0;
  let answer = 0;
  const length = jobs.length;
  while (jobs.length) {
    // 현 시간보다 작고, 수행시간도 짧을 수록 뒤로가도록 정렬
    jobs.sort((a, b) => {
      // a, b 중 하나만 실행가능할 경우
      if (a[0] <= time && b[0] > time) return 1;
      if (b[0] <= time && a[0] > time) return -1;
      // 둘 다 실행 가능할 경우
      return b[1] - a[1];
    });
    // 위 조건에 맞는 job이 현재 실행할 수 없는 경우
    if (jobs[jobs.length - 1][0] > time) {
      time += 1;
      continue;
    }
    const job = jobs.pop();
    time += job[1];
    answer += time - job[0];
  }
  return Math.floor(answer / length);
}
