function solution(s) {
  const setArr = s.slice(2, s.length - 2).split("},{");
  setArr.sort((a, b) => a.length - b.length);
  const answer = new Set();
  for (let set of setArr) {
    const numSet = set.split(",");
    numSet.forEach((num) => answer.add(Number(num)));
  }
  return Array.from(answer);
}
