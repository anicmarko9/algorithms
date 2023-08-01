import { BinarySearchTree, HubTr } from '../structures/binarySearchTree';
import { Queue } from '../structures/queue';

export function BFS(tree: BinarySearchTree): number[] {
  if (!tree.root) return [];
  let currentNode: HubTr = tree.root;
  let queue: Queue = new Queue();
  let results: number[] = [];

  queue.enqueue(currentNode);
  while (queue.length) {
    currentNode = queue.dequeue() as HubTr;
    results.push(currentNode.value);
    if (currentNode.left) queue.enqueue(currentNode.left);
    if (currentNode.right) queue.enqueue(currentNode.right);
  }

  return results;
}

export function DFSPreOrder(tree: BinarySearchTree): number[] {
  if (!tree.root) return [];
  let results: number[] = [];

  function traverse(currentNode: HubTr): void {
    results.push(currentNode.value);
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
  }

  traverse(tree.root);
  return results;
}

export function DFSPostOrder(tree: BinarySearchTree): number[] {
  if (!tree.root) return [];
  let results: number[] = [];

  function traverse(currentNode: HubTr): void {
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
    results.push(currentNode.value);
  }

  traverse(tree.root);
  return results;
}

export function DFSInOrder(tree: BinarySearchTree): number[] {
  if (!tree.root) return [];
  let results: number[] = [];

  function traverse(currentNode: HubTr): void {
    if (currentNode.left) traverse(currentNode.left);
    results.push(currentNode.value);
    if (currentNode.right) traverse(currentNode.right);
  }

  traverse(tree.root);
  return results;
}
