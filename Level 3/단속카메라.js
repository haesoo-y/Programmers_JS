function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[0] - b[0]);
  let camera = -30001;
  for (let route of routes) {
    if (route[0] > camera) {
      camera = route[1];
      answer++;
    } else {
      camera = Math.min(camera, route[1]);
    }
  }
  return answer;
}
