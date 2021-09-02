function solution(routes) {
  routes.sort((a, b) => a[0] - b[0]);
  const result = [routes[0]];
  for (let i = 1; i < routes.length; i++) {
    let isContain = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j][1] >= routes[i][0]) {
        // 시작점이 범위 안
        result[j][0] = routes[i][0];
        result[j][1] = Math.min(result[j][1], routes[i][1]);
        isContain = true;
        break;
      }
    }
    if (!isContain) result.push(routes[i]);
  }
  return result.length;
}
