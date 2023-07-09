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
    this.length++;
    return this;
  }

  // O(1)
  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.pop();
console.log(myDoublyLinkedList);
