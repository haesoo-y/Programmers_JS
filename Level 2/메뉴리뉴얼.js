function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((v, i) => {
    const rest = arr.slice(i + 1); // 현재 뒷부분
    const restCombination = getCombination(rest, num - 1); // 뒷부분 조합구해서 붙이기
    result.push(...restCombination.map((lst) => [v, ...lst]));
  });
  return result;
}

function solution(orders, course) {
  const answer = [];
  const courseObj = {};
  // 코스 경우의 수와 주문 횟수 계산
  orders.forEach((order) => {
    // 2개부터 전체까지 조합을 구하여 객체 키로 사용
    for (let i = 2; i <= order.length; i++) {
      const combinations = getCombination(order.split(''), i);
      combinations.forEach((combination) => {
        const dish = combination.sort().join(''); // 조합
        if (courseObj[dish]) {
          // 이미 누가 해당조합으로 먹었을 경우
          courseObj[dish] += 1;
        } else {
          courseObj[dish] = 1;
        }
      });
    }
  });

  // 답 도출
  for (const num of course) {
    // 해당 갯수 조합으로 이루어진 메뉴 2차원 배열
    const menuArr = Object.entries(courseObj).filter((menu) => menu[0].length === num);
    if (!menuArr.length) continue;
    menuArr.sort((a, b) => b[1] - a[1]); // 주문 횟수 내림차순 정렬
    // console.log(menuArr)
    const maxNum = menuArr[0][1];
    if (maxNum === 1) break;
    for (const [dish, sum] of menuArr) {
      if (sum < maxNum) break;
      answer.push(dish);
    }
  }

  return answer.sort();
}
