function getNewBoard(m, n, graph) {
  // 보드를 재배치
  let isFinished = false;
  // 하나씩 확인하면서 한칸씩 내림
  while (!isFinished) {
    isFinished = true;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] !== 0 && graph[i + 1][j] === 0) {
          graph[i + 1][j] = graph[i][j];
          graph[i][j] = 0;
          isFinished = false;
        }
      }
    }
  }
}

function checkForDelete(m, n, graph) {
  // 삭제 좌표를 반환
  const result = [];
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (graph[i][j] === 0) continue;
      if (graph[i][j] !== graph[i][j + 1]) continue;
      if (graph[i][j] !== graph[i + 1][j]) continue;
      if (graph[i][j] !== graph[i + 1][j + 1]) continue;
      result.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
    }
  }
  return result;
}

function solution(m, n, board) {
  var answer = 0;
  board = board.map((elem) => elem.split(""));
  while (true) {
    const deleteArr = checkForDelete(m, n, board);
    if (deleteArr.length === 0) break; // 더 이상 삭제할 것이 없음
    // 좌표를 바탕으로 삭제
    for (let [x, y] of deleteArr) {
      if (board[x][y] == 0) continue;
      board[x][y] = 0;
      answer += 1;
    }
    // 보드 재배치
    getNewBoard(m, n, board);
  }
  return answer;
}
