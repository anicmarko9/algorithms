class Hub {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // create new Node
  constructor(value) {
    const newHub = new Hub(value);
    this.head = newHub;
    this.tail = this.head;
    this.length = 1;
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
    this.length++;
    return this;
  }

  // remove last Node
  // return removed Node
  // O(n)
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
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
    this.length++;
    return this;
  }

  // remove first Node
  // return removed Node
  // O(1)
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  // find and return Node at index n
  // O(n)
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // find and set Node at index n
  // O(n)
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // create new Node
  // insert Node at index n
  // O(n)
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newHub = new Hub(value);
    const temp = this.get(index - 1);
    newHub.next = temp.next;
    temp.next = newHub;
    this.length++;
    return true;
  }

  // remove Node at index n
  // O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(2);
myLinkedList.insert(1, 1);
myLinkedList.reverse();
