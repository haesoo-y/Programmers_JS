function getDistanceArr(graph, n) {
  const result = new Array(n).fill(-1);
  // bfs
  const queue = [[0, 0]]; // [[node, distance]]
  result[0] = 0;
  while (queue.length) {
    const [cNode, cDistance] = queue.shift();
    for (const nNode of graph[cNode]) {
      if (result[nNode] > -1) continue;
      result[nNode] = cDistance + 1;
      queue.push([nNode, cDistance + 1]);
    }
  }
  return result;
}

function solution(n, edge) {
  let answer = 0;
  const graph = new Array(n).fill().map((v) => []); // 방향성 없는 그래프
  for (const [x, y] of edge) {
    graph[x - 1].push(y - 1);
    graph[y - 1].push(x - 1);
  }
  const distanceArr = getDistanceArr(graph, n);

  const maxDistance = Math.max(...distanceArr);
  distanceArr.forEach((distance) => {
    if (distance === maxDistance) answer += 1;
  });
  return answer;
}
