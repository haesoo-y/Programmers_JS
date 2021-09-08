function checkDistanceOk(x, y, graph) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
    if (graph[nx][ny] === "P") {
      return false;
    }
    if (graph[nx][ny] === "O") {
      // 한번 더 사방향 체크
      for (let j = 0; j < 4; j++) {
        const nnx = nx + dx[j];
        const nny = ny + dy[j];
        if (nnx < 0 || nny < 0 || nnx >= 5 || nny >= 5) continue;
        if (graph[nnx][nny] === "P") return false;
      }
    }
  }
  return true;
}
function checkDistance(place) {
  const graph = place.map((elem) => elem.split(""));
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (graph[i][j] == "P") {
        graph[i][j] = "C"; // 체크완료
        if (!checkDistanceOk(i, j, graph)) return 0;
      }
    }
  }
  return 1;
}

function solution(places) {
  return places.map((place) => checkDistance(place));
}
