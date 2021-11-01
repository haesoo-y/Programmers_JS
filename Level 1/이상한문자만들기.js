function solution(s) {
  return s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join(''),
    )
    .join(' ');
}
