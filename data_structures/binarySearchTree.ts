export class HubTr {
  value: number;
  left: HubTr | null;
  right: HubTr | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: HubTr | null;

  constructor() {
    this.root = null;
  }

  // O(log(n))
  insert(value: number): this {
    const newHubTr = new HubTr(value);
    if (!this.root) {
      this.root = newHubTr;
      return this;
    }
    let temp: HubTr = this.root;
    while (true) {
      // if there is a duplicate, do nothing
      if (newHubTr.value === temp.value) return this; // or count++;
      if (newHubTr.value < temp.value) {
        if (!temp.left) {
          temp.left = newHubTr;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newHubTr;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  // O(log(n))
  contains(value: number): boolean {
    if (!this.root) return false;
    let temp: HubTr | null = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // what is min value from current node level
  // this.minValueNode(this.root.right)
  minValueNode(currentNode: HubTr): HubTr {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // O(log(n))
  findMin(): HubTr | null {
    // find the node with the minimum value in the entire binary search tree

    let currentNode: HubTr | null = this.root;
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // O(log(n))
  findMax(): HubTr | null {
    // Find the node with the maximum value in the entire binary search tree.

    let currentNode: HubTr | null = this.root;
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  // O(log(n))
  remove(value: number): this {
    // remove a value from the binary search tree while maintaining the BST property

    let currentNode: HubTr | null = this.root;
    let parentNode: HubTr | null = null;
    let found: boolean = false;

    // find the node to remove and its parent
    while (currentNode && !found) {
      if (value === currentNode.value) {
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    if (!found) return this; // value not found, do nothing

    // case 1: node to be removed has no children
    if (!currentNode!.left && !currentNode!.right) {
      if (!parentNode) {
        // if it's the root node with no children, simply remove it
        this.root = null;
      } else {
        // otherwise, remove the reference from the parent node
        if (parentNode.left === currentNode) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      }
    }

    // case 2: node to be removed has one child (either left or right)
    else if (!currentNode!.left || !currentNode!.right) {
      const childNode: HubTr | null = currentNode!.left || currentNode!.right;

      if (!parentNode) {
        // if it's the root node with one child, update the root
        this.root = childNode;
      } else {
        // otherwise, update the reference from the parent node to the child node
        if (parentNode.left === currentNode) {
          parentNode.left = childNode;
        } else {
          parentNode.right = childNode;
        }
      }
    }
    // case 3: node to be removed has two children
    else {
      const successorNode: HubTr = this.minValueNode(currentNode!.right);
      const successorValue: number = successorNode.value;
      this.remove(successorValue);
      currentNode!.value = successorValue;
    }

    return this;
  }
}
