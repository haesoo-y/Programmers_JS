function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let same = 0;
  let zero = 0;
  for (let lotto of lottos) {
    if (lotto === 0) {
      zero += 1;
    } else if (win_nums.includes(lotto)) {
      same += 1;
    }
  }
  return [rank[same + zero], rank[same]];
}
