import { Hub } from "./singlyLinkedList";

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
}
