function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    // 행
    let row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      // 열
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        // 원소
        elem += arr1[i][k] * arr2[k][j];
      }
      row.push(elem);
    }
    answer.push(row);
  }
  return answer;
}
