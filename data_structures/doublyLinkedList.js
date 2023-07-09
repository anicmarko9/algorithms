class HubDbl {
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
    const newHubDbl = new HubDbl(value);
    if (!this.head) {
      this.head = newHubDbl;
      this.tail = newHubDbl;
    } else {
      this.tail.next = newHubDbl;
      newHubDbl.prev = this.tail;
      this.tail = newHubDbl;
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
    const newHubDbl = new HubDbl(value);
    if (!this.head) {
      this.head = newHubDbl;
      this.tail = newHubDbl;
    } else {
      newHubDbl.next = this.head;
      this.head.prev = newHubDbl;
      this.head = newHubDbl;
    }
    this.length++;
    return this;
  }

  // O(1)
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

  // O(n)
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

  // O(n)
  set(index, value) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  // O(n)
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
    const newHubDbl = new HubDbl(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newHubDbl;
    newHubDbl.prev = before;
    newHubDbl.next = after;
    after.prev = newHubDbl;
    this.length++;
    return true;
  }

  // O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const currentNode = this.get(index);
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return currentNode;
  }
}
