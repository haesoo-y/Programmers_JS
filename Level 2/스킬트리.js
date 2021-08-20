function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  for (let tree of skill_trees) {
    let skillQueue = [...skill];
    for (let c of tree) {
      // 트리의 문자 탐색
      if (!skillQueue.includes(c)) continue; // 포함하지 않으면 건너뜀
      if (skillQueue[0] === c) {
        // 현재 배워야하는 스킬일 경우
        skillQueue.shift();
      } else {
        // 현재 배워야하는 스킬이 아닐 경우
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}
