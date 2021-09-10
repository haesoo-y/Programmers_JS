function solution(sticker) {
  if (sticker.length <= 3) return Math.max(...sticker);
  const length = sticker.length;
  const dpWithFirst = new Array(length - 1).fill(0);
  const dpWithLast = new Array(length - 1).fill(0);
  dpWithFirst[0] = sticker[0];
  dpWithLast[0] = sticker[1];
  dpWithFirst[1] = Math.max(sticker[0], sticker[1]);
  dpWithLast[1] = Math.max(sticker[1], sticker[2]);
  for (let i = 2; i < sticker.length; i++) {
    dpWithFirst[i] = Math.max(dpWithFirst[i - 1], dpWithFirst[i - 2] + sticker[i]);
    dpWithLast[i] = Math.max(dpWithLast[i - 1], dpWithLast[i - 2] + sticker[i + 1]);
  }
  return Math.max(dpWithFirst[length - 2], dpWithLast[length - 2]);
}
