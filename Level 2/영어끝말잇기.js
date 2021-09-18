function solution(n, words) {
  const answer = [0, 0];
  const countObj = {};
  let preWord = words[0];
  countObj[preWord] = 1;
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word[0] !== preWord[preWord.length - 1] || countObj[word]) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    } else {
      countObj[word] = 1;
    }
    preWord = word;
  }
  return answer;
}
