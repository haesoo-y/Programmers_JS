function solution(genres, plays) {
  const answer = [];
  const playSum = {}; // 총 재생횟수
  const genreIndex = {}; // 각 장르별 인덱스 배열
  // 총 재생횟수 객체와 장르별 인덱스 배열 객체를 만듦
  genres.forEach((genre, i) => {
    playSum[genre] ? (playSum[genre] += plays[i]) : (playSum[genre] = plays[i]);
    genreIndex[genre] ? genreIndex[genre].push(i) : (genreIndex[genre] = [i]);
  });

  // 총 재생횟수 객체를 정렬시킨 2차원 배열을 이용하여 답 도출
  for (const [genre, sum] of Object.entries(playSum).sort((a, b) => b[1] - a[1])) {
    genreIndex[genre].sort((a, b) => plays[b] - plays[a]); // 인덱스를 플레이 횟수에 대해 정렬
    answer.push(genreIndex[genre][0]);
    if (genreIndex[genre].length > 1) answer.push(genreIndex[genre][1]);
  }
  return answer;
}
