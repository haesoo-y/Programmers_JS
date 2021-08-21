function solution(cacheSize, cities) {
  let answer = 0;
  const LRU = new Map();
  for (let city of cities) {
    city = city.toUpperCase();
    const cachedValue = LRU.get(city);
    if (cachedValue) {
      // 캐시되어 있는 경우
      answer += 1;
      LRU.delete(city); // 최신화하기 위해 빼준다.
    } else {
      // 캐시되어 있지 않은 경우
      answer += 5;
    }
    LRU.set(city, true); // 맵의 가장 뒤에 넣는다.
    if (LRU.size > cacheSize) LRU.delete(LRU.keys().next().value);
  }
  return answer;
}
