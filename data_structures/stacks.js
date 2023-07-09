class Stack {
  constructor() {
    this.top = null;
    this.height = 0;
  }

  // O(1)
  push(value) {
    const newHub = new Hub(value);
    if (!this.top) {
      this.top = newHub;
    } else {
      newHub.next = this.top;
      this.top = newHub;
    }
    this.height++;
    return this;
  }

  // O(1)
  pop() {
    if (!this.top) return null;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}
