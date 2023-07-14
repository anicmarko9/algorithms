import { Hub } from "./singlyLinkedList";

export class Queue {
  first: Hub | null;
  last: Hub | null;
  length: number = 0;

  constructor() {
    this.first = null;
    this.last = null;
  }

  // Add on the end of the queue
  // O(1)
  enqueue(value: number): this {
    const newHub = new Hub(value);
    if (!this.last) {
      this.first = newHub;
      this.last = newHub;
    } else {
      this.last.next = newHub;
      this.last = newHub;
    }
    this.length++;
    return this;
  }

  // Remove first item in the queue
  // O(1)
  dequeue(): Hub | null {
    if (!this.first) return null;
    let temp: Hub = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
