function getGCD(small, large) {
  return large % small === 0 ? small : getGCD(large % small, small);
}

function solution(w, h) {
  return w * h - (w + h - getGCD(Math.min(w, h), Math.max(w, h)));
}
