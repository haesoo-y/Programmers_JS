class Queue {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }

  get size() {
    return this._size;
  }

  enQueue = (value) => {
    const node = { value };
    if (this._size === 0) {
      // 사이즈 0이면 헤드 설정
      this.head = node;
    } else {
      this.tail.next = node; // 기존 마지막 노드에 연결
    }
    this.tail = node; // 마지막 노드를 입력 값으로 변경
    this._size++;
  };

  deQueue = () => {
    if (this._size === 0) return;
    const result = this.head.value;
    if (this._size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return result;
  };
}

function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 시간
  const sum = truck_weights.reduce((acc, cur) => acc + cur);
  let currentWeight = 0; // 현재 무게
  let finishedWeight = 0; // 건넌 무게
  let number = 0; // 트럭 인덱스
  const bridge = new Queue(); // 다리 위 상황
  while (finishedWeight < sum) {
    time += 1;
    if (bridge.size >= bridge_length) {
      const truck = bridge.deQueue();
      currentWeight -= truck;
      finishedWeight += truck;
    }
    if (weight >= currentWeight + truck_weights[number]) {
      // 트럭이 더 올라갈 수 있을 경우
      currentWeight += truck_weights[number];
      bridge.enQueue(truck_weights[number]);
      number += 1;
    } else {
      // 트럭이 더 못올라갈 경우
      bridge.enQueue(0);
    }
  }
  return time;
}
// 트럭이 다리에서 나가는 동시에 다른 트럭이 들어올 수 있음을 간과함.
// 동시에 일어날 수 있으므로 if를 2개 두었음
