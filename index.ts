import { DoublyLinkedList } from "./data_structures/doublyLinkedList.js";
import { SinglyLinkedList } from "./data_structures/singlyLinkedList.js";
import { Stack } from "./data_structures/stack.js";
import { Queue } from "./data_structures/queue.js";
import { Graph } from "./data_structures/graph.js";
import { HashTable } from "./data_structures/hashTable.js";
import { BinarySearchTree } from "./data_structures/binarySearchTree.js";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from "./algorithms/simpleAlgorithms.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { quickSort } from "./algorithms/quickSort.js";
import {
  BFS,
  DFSPreOrder,
  DFSPostOrder,
  DFSInOrder,
} from "./algorithms/treeTraversal.js";

let mySinglyLinkedList = new SinglyLinkedList();
mySinglyLinkedList.push(0);
mySinglyLinkedList.push(1);
mySinglyLinkedList.push(2);
mySinglyLinkedList.push(3);
mySinglyLinkedList.push(4);

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

let myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);

let myQueue = new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(40);
myBinarySearchTree.insert(35);
myBinarySearchTree.insert(61);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(54);
myBinarySearchTree.insert(112);
myBinarySearchTree.insert(39);

let myHashTable = new HashTable();
myHashTable.set("lumber", 70);
myHashTable.set("washers", 50);
myHashTable.set("bolts", 200);

let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addEdge("A", "B");

const myArray1 = [4, 2, 6, 5, 1, 3];
bubbleSort(myArray1);

const myArray2 = [4, 2, 6, 5, 1, 3];
selectionSort(myArray2);

const myArray3 = [4, 2, 6, 5, 1, 3];
insertionSort(myArray3);

let myArray4 = [4, 2, 6, 5, 1, 3];
myArray4 = mergeSort(myArray4);

const myArray5 = [4, 2, 6, 5, 1, 3];
quickSort(myArray5);

const results1 = BFS(myBinarySearchTree);
const results2 = DFSPreOrder(myBinarySearchTree);
const results3 = DFSPostOrder(myBinarySearchTree);
const results4 = DFSInOrder(myBinarySearchTree);

console.log(mySinglyLinkedList);
console.log(myDoublyLinkedList);
console.log(myStack);
console.log(myQueue);
console.log(myHashTable);
console.log(myGraph);
console.log(myBinarySearchTree);

console.log(myArray1);
console.log(myArray2);
console.log(myArray3);
console.log(myArray4);
console.log(myArray5);

console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);
