class Hub {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  // create empty List
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // create new Node
  // add Node to end
  // O(1)
  push(value) {
    const newHub = new Hub(value);
    if (!this.head) {
      this.head = newHub;
      this.tail = newHub;
    } else {
      this.tail.next = newHub;
      this.tail = newHub;
    }
    return this;
  }

  // remove last Node
  // return removed Node
  // O(n)
  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let prev = this.head;
    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      return currentNode;
    }
    while (currentNode.next) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prev;
    this.tail.next = null;
    return currentNode;
  }

  // create new Node
  // add Node to beginning
  // O(1)
  unshift(value) {
    const newHub = new Hub(value);
    if (!this.head) {
      this.head = newHub;
      this.tail = newHub;
    } else {
      newHub.next = this.head;
      this.head = newHub;
    }
    return this;
  }

  // remove first Node
  // return removed Node
  // O(1)
  shift() {
    if (!this.head) return null;
    let currentNode = this.head;
    if (!currentNode.next) {
      this.tail = null;
      return currentNode;
    }
    this.head = this.head.next;
    currentNode.next = null;
    return currentNode;
  }

  // find and return Node at index n
  // O(n)
  get(index) {
    if (index < 0) return null;
    let currentNode = this.head;
    let counter = 0;
    while (currentNode.next) {
      if (index === counter) break;
      currentNode = currentNode.next;
      counter++;
    }
    if (counter < index) return null;
    return currentNode;
  }

  // find and set Node at index n
  // O(n)
  set(index, value) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  // create new Node
  // insert Node at index n
  // O(n)
  insert(index, value) {
    if (index < 0) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const newHub = new Hub(value);
    const currentNode = this.get(index - 1);
    if (!currentNode) return false;
    if (!currentNode.next) {
      this.push(value);
      return true;
    }
    newHub.next = currentNode.next;
    currentNode.next = newHub;
    return true;
  }

  // remove Node at index n
  // O(n)
  remove(index) {
    if (index < 0) return null;
    if (index === 0) return this.shift();
    const before = this.get(index - 1);
    const currentNode = before?.next;
    if (!currentNode) return null;
    if (!currentNode.next) return this.pop();
    before.next = currentNode.next;
    currentNode.next = null;
    return currentNode;
  }

  // O(n)
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next = currentNode.next;
    let prev = null;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}
