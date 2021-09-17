function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const leftTop = triangle[i - 1][j - 1] || 0;
      const rightTop = triangle[i - 1][j] || 0;
      triangle[i][j] += Math.max(leftTop, rightTop);
    }
  }
  console.log(triangle);
  return Math.max(...triangle[triangle.length - 1]);
}
