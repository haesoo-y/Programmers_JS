function gcd(x, y) {
  [x, y] = [Math.min(x, y), Math.max(x, y)];
  while (y % x > 0) {
    y = y % x;
    [x, y] = [y, x];
  }
  return x;
}
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur));
}
