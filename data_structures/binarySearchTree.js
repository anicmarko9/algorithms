class HubTr {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log(n))
  insert(value) {
    const newHubTr = new HubTr(value);
    if (!this.root) {
      this.root = newHubTr;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newHubTr.value === temp.value) return null; // or count++;
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
}
