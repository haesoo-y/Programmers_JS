function solution(price, money, count) {
  const pair = ((price * (count + 1)) / 2) * count;
  return money - pair > 0 ? 0 : pair - money;
}
