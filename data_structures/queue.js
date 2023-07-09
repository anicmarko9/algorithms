class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  enqueue(value) {
    const newHub = new Hub(value);
    if (!this.first) {
      this.first = newHub;
      this.last = newHub;
    } else {
      this.last.next = newHub;
      this.last = newHub;
    }
    this.length++;
    return this;
  }
}
