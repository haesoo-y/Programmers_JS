class Boxer {
  constructor(w, i) {
    this.weight = w;
    this.index = i;
    this.rate = 0;
    this.winHeavier = 0;
  }
  getRate(str) {
    let win = 0;
    let lose = 0;
    for (let c of str) {
      if (c == "W") win += 1;
      if (c == "L") lose += 1;
    }
    if (win + lose) {
      this.rate = win / (win + lose);
    }
  }
  getWinHeavier(weights, str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "W" && weights[i] > this.weight) {
        this.winHeavier += 1;
      }
    }
  }
}

function solution(weights, head2head) {
  const boxerArr = [];
  // 각 정보를 담은 boxer 배열 생성
  for (let i = 0; i < weights.length; i++) {
    const boxer = new Boxer(weights[i], i);
    boxer.getRate(head2head[i]);
    boxer.getWinHeavier(weights, head2head[i]);
    boxerArr.push(boxer);
  }
  // 정렬
  boxerArr.sort((a, b) => {
    if (a.rate !== b.rate) return b.rate - a.rate;
    if (a.winHeavier !== b.winHeavier) return b.winHeavier - a.winHeavier;
    if (a.weight !== b.weight) return b.weight - a.weight;
    return a.index - b.index;
  });

  return boxerArr.map((elem) => elem.index + 1);
}
