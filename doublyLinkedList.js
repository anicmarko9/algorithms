class Hub {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // create new Node
  constructor(value) {
    const newHub = new Hub(value);
    this.head = newHub;
    this.tail = this.head;
    this.length = 1;
  }
}
