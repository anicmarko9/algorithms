class Hub {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // create new Node
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  push(value) {
    const newHub = new Hub(value);
    if (!this.head) {
      this.head = newHub;
      this.tail = newHub;
    } else {
      this.tail.next = newHub;
      newHub.prev = this.tail;
      this.tail = newHub;
    }
    return this;
  }

  // O(1)
  pop() {
    if (!this.head) return null;
    let temp = this.tail;
    if (temp.prev === temp.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    return temp;
  }

  unshift(value) {
    const newHub = new Hub(value);
    if (!this.head) {
      this.head = newHub;
      this.tail = newHub;
    } else {
      newHub.next = this.head;
      this.head.prev = newHub;
      this.head = newHub;
    }
    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
