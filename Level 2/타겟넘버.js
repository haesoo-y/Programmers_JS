class Queue {
  constructor() {
    this.size = 0;
    this.head;
    this.tail;
  }
  enQueue(value) {
    const node = { value };
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  deQueue() {
    if (this.size === 0) return;
    const result = this.head.value;
    if (this.size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return result;
  }
}
function solution(numbers, target) {
  let answer = 0;
  const queue = new Queue();
  queue.enQueue(0);
  for (const number of numbers) {
    const length = queue.size;
    for (let i = 0; i < length; i++) {
      // BFS
      const thisNum = queue.deQueue();
      queue.enQueue(thisNum + number);
      queue.enQueue(thisNum - number);
    }
  }
  while (queue.size) {
    const number = queue.deQueue();
    if (number === target) {
      answer++;
    }
  }
  return answer;
}
