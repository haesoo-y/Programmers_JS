function isUniqueMaxOrMin(i, score) {
  // i 번째가 score에서 유일하게 최대 혹은 최소인가
  const maxArr = score.filter((x) => x === Math.max(...score));
  const minArr = score.filter((x) => x === Math.min(...score));
  if (score[i] === maxArr[0]) {
    return maxArr.length === 1;
  }
  if (score[i] === minArr[0]) {
    return minArr.length === 1;
  }
  return false;
}

function getAverage(lst) {
  let length = lst.includes(null) ? lst.length - 1 : lst.length;
  const sum = lst.reduce((acc, cur) => {
    if (cur) return acc + cur;
    return acc;
  });
  return sum / length;
}

function getRank(lst) {
  const num = getAverage(lst);
  if (num >= 90) return "A";
  if (num >= 80) return "B";
  if (num >= 70) return "C";
  if (num >= 50) return "D";
  return "F";
}

function solution(scores) {
  const graph = new Array(scores[0].length).fill(0).map((elem, i) => {
    return new Array(scores.length).fill(0).map((elem, j) => scores[j][i]);
  }); // 행과 열 교체

  // 필요없는 값 null로 변경
  graph.forEach((score, i) => {
    if (isUniqueMaxOrMin(i, score)) {
      score[i] = null;
    }
  });

  // 학점 구하기
  return graph.map((score) => getRank(score)).join("");
}
