class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Add on the end of the queue
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

  // Remove first item in the queue
  // O(1)
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
