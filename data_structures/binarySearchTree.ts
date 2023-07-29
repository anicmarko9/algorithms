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
}
