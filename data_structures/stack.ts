import { Hub } from "./singlyLinkedList.js";

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
    let temp: Hub = this.top;
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
}
