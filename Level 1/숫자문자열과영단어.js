function solution(s) {
  const stringNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  stringNum.forEach((str, i) => {
    while (s.includes(str)) {
      s = s.replace(str, i.toString());
    }
    // replaceAll 은 es2021 문법
  });
  return Number(s);
}
