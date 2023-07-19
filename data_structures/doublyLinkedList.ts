class HubDbl {
  value: number;
  next: HubDbl | null;
  prev: HubDbl | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  head: HubDbl | null;
  tail: HubDbl | null;
  length: number = 0;
  // create an empty list
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  push(value: number): this {
    const newHubDbl = new HubDbl(value);
    if (!this.head || !this.tail) {
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
  pop(): HubDbl | null {
    if (!this.tail) return null;
    let currentNode = this.tail;
    if (currentNode.prev === currentNode.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev as HubDbl;
      this.tail.next = null;
      currentNode.prev = null;
    }
    this.length--;
    return currentNode;
  }

  // O(1)
  unshift(value: number): this {
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
  shift(): HubDbl | null {
    if (!this.head) return null;
    let currentNode = this.head;
    if (currentNode.prev === currentNode.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next as HubDbl;
      this.head.prev = null;
      currentNode.next = null;
    }
    this.length--;
    return currentNode;
  }

  // O(n)
  get(index: number): HubDbl | null {
    if (index < 0 || index >= this.length) return null;
    let currentNode: HubDbl | null;
    if (index < 0.5 * this.length) {
      currentNode = this.head;
      let counter: number = 0;
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
    return currentNode;
  }

  // O(n)
  set(index: number, value: number): boolean {
    let currentNode: HubDbl | null = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  // O(n)
  insert(index: number, value: number): boolean {
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
    const before = this.get(index - 1) as HubDbl;
    const after = before.next as HubDbl;
    before.next = newHubDbl;
    newHubDbl.prev = before;
    newHubDbl.next = after;
    after.prev = newHubDbl;
    this.length++;
    return true;
  }

  // O(n)
  remove(index: number): HubDbl | null {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const currentNode = this.get(index) as HubDbl;
    (currentNode.prev as HubDbl).next = currentNode.next;
    (currentNode.next as HubDbl).prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return currentNode;
  }

  // O(n)
  reverse(): this {
    let currentNode: HubDbl | null = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    while (currentNode) {
      const nextNode: HubDbl | null = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
    return this;
  }

  // list -> human-readable array
  // O(n)
  toString(): string {
    let currentNode: HubDbl | null = this.head;
    const elements: number[] = [];
    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return elements.join(" <-> ");
  }

  // O(1)
  isEmpty(): boolean {
    return this.length === 0;
  }

  // O(1)
  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(n)
  toArray(): number[] {
    const result: number[] = [];
    let currentNode: HubDbl | null = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  // O(n)
  contains(value: number): boolean {
    let currentNode: HubDbl | null = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // O(n)
  indexOf(value: number): number {
    let currentNode: HubDbl | null = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  // O(n)
  forEach(callback: (value: number) => void): void {
    let currentNode: HubDbl | null = this.head;
    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
