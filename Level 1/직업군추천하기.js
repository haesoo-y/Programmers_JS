function solution(table, languages, preference) {
  const result = []; // [[직업군, 점수], ...]
  table.forEach((elem) => {
    const arr = elem.split(" ");
    const job = arr[0];
    let score = 0;
    for (let i = 0; i < languages.length; i++) {
      const index = arr.indexOf(languages[i]);
      if (index === -1) continue;
      score += (6 - index) * preference[i];
    }
    result.push([job, score]);
  });
  result.sort((a, b) => {
    if (a[1] - b[1]) return b[1] - a[1];
    if (a[0] < b[0]) return -1;
    return 1;
  });
  return result[0][0];
}
