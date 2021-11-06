function solution(dirs) {
  let answer = 0;
  const route = new Set();
  let x = 0;
  let y = 0;
  for (const d of dirs) {
    const prevCoord = '' + x + y;
    if (d === 'U' && y < 5) {
      y += 1;
    } else if (d === 'D' && y > -5) {
      y -= 1;
    } else if (d === 'L' && x > -5) {
      x -= 1;
    } else if (d === 'R' && x < 5) {
      x += 1;
    } else {
      // 움직이지 않은 경우
      continue;
    }
    const thisCoord = '' + x + y;
    // 방향성 없이 두 좌표 연결
    const thisRoute = prevCoord < thisCoord ? prevCoord + thisCoord : thisCoord + prevCoord;
    route.add(thisRoute);
  }
  return route.size;
}
