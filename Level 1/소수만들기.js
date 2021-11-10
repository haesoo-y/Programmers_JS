function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((v, i) => {
    const rest = arr.slice(i + 1);
    const restCombination = getCombination(rest, num - 1);
    result.push(...restCombination.map((lst) => [v, ...lst]));
  });
  return result;
}

function getSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function isPrime(num) {
  if (num <= 2) return false;
  for (let i = 2; i <= Math.ceil(num ** 0.5); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  const combArr = getCombination(nums, 3);
  combArr.forEach((lst) => {
    if (isPrime(getSum(lst))) {
      answer += 1;
    }
  });

  return answer;
}
