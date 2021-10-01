function dfs(obj, arr, target) {
  if (arr.length === target) return arr; // 정답
  const cities = obj[arr[arr.length - 1]];
  if (!cities) return false;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    if (city) {
      cities[i] = false; // 방문처리
      const result = dfs(obj, [...arr, city], target);
      if (result) return result;
      cities[i] = city;
    }
  }
  return false;
}

function solution(tickets) {
  const routes = {};
  tickets.forEach((route) => {
    if (routes[route[0]]) {
      routes[route[0]].push(route[1]);
    } else {
      routes[route[0]] = [route[1]];
    }
  });
  Object.values(routes).forEach((arr) => arr.sort());
  const answer = dfs(routes, ["ICN"], tickets.length + 1);
  return answer;
}
