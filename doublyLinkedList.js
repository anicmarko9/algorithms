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
    this.length = 0;
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
    if (!this.head) return null;
    let currentNode = this.tail;
    if (currentNode.prev === currentNode.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      currentNode.prev = null;
    }
    this.length--;
    return currentNode;
  }

  // O(1)
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
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return null;
    let currentNode = this.head;
    if (currentNode.prev === currentNode.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      currentNode.next = null;
    }
    this.length--;
    return currentNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    if (index < 0.5 * this.length) {
      currentNode = this.head;
      let counter = 0;
      while (currentNode && counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      let counter = this.length - 1;
      while (currentNode && counter > index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode ? currentNode : null;
  }

  set(index, value) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    const newHub = new Hub(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newHub;
    newHub.prev = before;
    newHub.next = after;
    after.prev = newHub;
    this.length++;
    return true;
  }
}

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
