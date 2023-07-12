function BFS(tree) {
  let currentNode = tree.root;
  let queue = [];
  let results = [];
  queue.push(currentNode);

  while (queue.length) {
    currentNode = queue.shift();
    results.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return results;
}

function DFSPreOrder(tree) {
  let results = [];
  function traverse(currentNode) {
    results.push(currentNode.value);
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
  }
  traverse(tree.root);
  return results;
}

function DFSPostOrder(tree) {
  let results = [];
  function traverse(currentNode) {
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
    results.push(currentNode.value);
  }
  traverse(tree.root);
  return results;
}
