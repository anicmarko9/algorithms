import { Hub } from './singlyLinkedList.js';

export class Stack {
  top: Hub | null;
  height: number = 0;
  constructor() {
    this.top = null;
  }

  // O(1)
  push(value: number): this {
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
  pop(): Hub | null {
    if (!this.top) return null;
    const temp: Hub = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }

  // O(1)
  peek(): Hub | null {
    return this.top;
  }

  // O(1)
  size(): number {
    return this.height;
  }

  // O(1)
  isEmpty(): boolean {
    return this.height === 0;
  }

  // O(1)
  clear(): void {
    this.top = null;
    this.height = 0;
  }

  // O(n)
  toArray(): number[] {
    const result: number[] = [];
    let currentNode: Hub | null = this.top;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  // O(n)
  contains(value: number): boolean {
    let currentNode: Hub | null = this.top;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // O(n)
  reverse(): this {
    const stackArray = this.toArray();
    this.clear();
    for (const value of stackArray) {
      this.push(value);
    }
    return this;
  }

  // O(n)
  forEach(callback: (value: number) => void): void {
    let currentNode: Hub | null = this.top;
    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // O(n)
  map(callback: (value: number) => unknown): unknown[] {
    const result: unknown[] = [];
    let currentNode: Hub | null = this.top;
    while (currentNode) {
      result.push(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    return result;
  }

  // O(n)
  filter(callback: (value: number) => boolean): Stack {
    const newStack = new Stack();
    let currentNode: Hub | null = this.top;
    while (currentNode) {
      if (callback(currentNode.value)) {
        newStack.push(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    return newStack;
  }
}
