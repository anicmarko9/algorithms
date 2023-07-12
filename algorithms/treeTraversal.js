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
