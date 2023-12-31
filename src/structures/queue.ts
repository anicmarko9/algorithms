import type { HubTr } from './binarySearchTree.js';
import { Hub } from './singlyLinkedList.js';

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
  enqueue(value: number | HubTr): this {
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
    const temp: Hub = this.first;
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

  // Get the first item in the queue without removing it
  // O(1)
  peek(): Hub | null {
    return this.first;
  }

  // Get the current number of elements in the queue
  // O(1)
  size(): number {
    return this.length;
  }

  // Check if the queue is empty
  // O(1)
  isEmpty(): boolean {
    return this.length === 0;
  }

  // Remove all elements from the queue
  clear(): void {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Check if the queue contains a specific value
  contains(value: number): boolean {
    let currentNode: Hub | null = this.first;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Convert the queue to an array
  toArray(): number[] {
    const result: number[] = [];
    let currentNode: Hub | null = this.first;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  // Reverse the order of elements in the queue
  // O(n)
  reverse(): this {
    const stackArray = this.toArray().reverse();
    this.clear();
    for (const value of stackArray) {
      this.enqueue(value);
    }
    return this;
  }

  // Apply a callback function to each element in the queue
  // O(n)
  forEach(callback: (value: number) => void): void {
    let currentNode: Hub | null = this.first;
    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Create a new array by applying a callback function to each element in the queue
  // O(n)
  map(callback: (value: number) => unknown): unknown[] {
    const result: unknown[] = [];
    let currentNode: Hub | null = this.first;
    while (currentNode) {
      result.push(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    return result;
  }

  // Create a new queue with elements that pass a filter condition
  // O(n)
  filter(callback: (value: number) => boolean): Queue {
    const newQueue = new Queue();
    let currentNode: Hub | null = this.first;
    while (currentNode) {
      if (callback(currentNode.value)) {
        newQueue.enqueue(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    return newQueue;
  }
}
