import { HubTr } from "./binarySearchTree.js";

export class Hub {
  value: number;
  next: Hub | null;
  left?: HubTr | null = null;
  right?: HubTr | null = null;
  constructor(value: number | HubTr) {
    if (typeof value === "number") {
      this.value = value;
      this.next = null;
    } else {
      // this code is used for queue inside of the bin. tree
      this.value = value.value;
      this.left = value.left;
      this.right = value.right;
      this.next = null;
    }
  }
}

export class SinglyLinkedList {
  head: Hub | null;
  tail: Hub | null;
  // create an empty List
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // create new Node
  // add Node to end
  // O(1)
  push(value: number): this {
    const newHub = new Hub(value);
    if (!this.head || !this.tail) {
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
  pop(): Hub | null {
    if (!this.head) return null;
    let currentNode: Hub = this.head;
    let prev: Hub = this.head;
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
  unshift(value: number): this {
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
  shift(): Hub | null {
    if (!this.head) return null;
    let currentNode: Hub = this.head;
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
  get(index: number): Hub | null {
    if (index < 0 || !this.head) return null;
    let currentNode: Hub = this.head;
    let counter: number = 0;
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
  set(index: number, value: number): boolean {
    let currentNode: Hub | null = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  // create new Node
  // insert Node at index n
  // O(n)
  insert(index: number, value: number): boolean {
    if (index < 0) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const newHub = new Hub(value);
    const currentNode: Hub | null = this.get(index - 1);
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
  remove(index: number): Hub | null {
    if (index < 0) return null;
    if (index === 0) return this.shift();

    const before: Hub | null = this.get(index - 1);
    if (!before || (before && !before.next)) return null;

    const currentNode = before.next as Hub;
    if (!currentNode.next) return this.pop();

    before.next = currentNode.next;
    currentNode.next = null;

    return currentNode;
  }

  // O(n)
  reverse(): this {
    let currentNode: Hub | null = this.head;
    if (!currentNode) return this;
    this.head = this.tail;
    this.tail = currentNode;

    let next: Hub | null = currentNode.next;
    let prev: Hub | null = null;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  // O(n)
  toString(): string {
    let currentNode: Hub | null = this.head;
    const elements: number[] = [];
    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return elements.join(" -> ");
  }

  // list -> array
  // O(n)
  toArray(): number[] {
    let currentNode: Hub | null = this.head;
    const arr: number[] = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}
