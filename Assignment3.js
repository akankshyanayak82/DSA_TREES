console.clear()
//que-1 Implement Binary tree===============================================

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  print() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);
    document.write(result.join(" -> "));
  }
}

const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.print(); // prints "1 -> 3 -> 4 -> 6 -> 7 -> 8 -> 10 -> 13 -> 14"

// que - 2 Find height of a given tree=============================================
class BinaryTree1 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  getHeight() {
    const height = (node) => {
      if (!node) {
        return -1;
      }

      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    };

    return height(this.root);
  }

  print() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);
    document.write(result.join(" -> "));
  }
}

const tree1 = new BinaryTree1();
tree1.insert(8);
tree1.insert(3);
tree1.insert(10);
tree1.insert(1);
tree1.insert(6);
tree1.insert(14);
tree1.insert(4);
tree1.insert(7);
tree1.insert(13);

const height = tree1.getHeight();
document.write("<br>" + `Height of tree: ${height}` + "<br>");

// que - 3 perform Pre-order, Post-order, In-order traversal====================


class BinaryTree2 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  preOrder() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };

    traverse(this.root);
    document.write(`Pre-order traversal: ${result.join(" -> ")}<br>`);
  }

  postOrder() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    };

    traverse(this.root);
    document.write(`Post-order traversal: ${result.join(" -> ")}<br>`);
  }

  inOrder() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);
    document.write(`In-order traversal: ${result.join(" -> ")}<br>`);
  }

  getHeight() {
    const height = (node) => {
      if (!node) {
        return -1;
      }

      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    };

    return height(this.root);
  }

  print() {
    const result = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);
    document.write(`In-order traversal: ${result.join(" -> ")}<br>`);
  }
}

const tree2 = new BinaryTree2();
tree2.insert(8);
tree2.insert(3);
tree2.insert(10);
tree2.insert(1);
tree2.insert(6);
tree2.insert(14);
tree2.insert(4);
tree2.insert(7);
tree2.insert(13);

tree2.preOrder();
tree2.postOrder();
tree2.inOrder();

// Que - 4 Function to print all the leaves in a given binary tree===================

class Node1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree3 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node1(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // method to print all leaf nodes
  printLeafNodes(node) {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      document.write(`${node.value} `);
    }
    this.printLeafNodes(node.left);
    this.printLeafNodes(node.right);
  }
}

// create a new BinaryTree object
const tree3 = new BinaryTree3();

// insert nodes into the tree
tree3.insert(8);
tree3.insert(3);
tree3.insert(10);
tree3.insert(1);
tree3.insert(6);
tree3.insert(14);
tree3.insert(4);
tree3.insert(7);
tree3.insert(13);

// print all leaf nodes
document.write("Leaf nodes: ");
tree3.printLeafNodes(tree3.root);

//Que - 5 Implement BFS (Breath First Search) and DFS (Depth First Search)=======================

class Node2 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree4 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node2(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // BFS implementation
  bfs() {
    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  // DFS implementation
  dfs(node, result) {
    if (!node) {
      return;
    }

    result.push(node.value);
    this.dfs(node.left, result);
    this.dfs(node.right, result);
  }
}

// create a new BinaryTree object
const tree4 = new BinaryTree4();

// insert nodes into the tree
tree4.insert(8);
tree4.insert(3);
tree4.insert(10);
tree4.insert(1);
tree4.insert(6);
tree4.insert(14);
tree4.insert(4);
tree4.insert(7);
tree4.insert(13);

// perform BFS and print the result
const bfsResult = tree4.bfs();
document.write("<br>" + `BFS: ${bfsResult.join(" ")}<br>`);

// perform DFS and print the result
const dfsResult = [];
tree4.dfs(tree4.root, dfsResult);
document.write(`DFS: ${dfsResult.join(" ")}<br>`);

//Que - 6 Find sum of all left leaves in a given Binary Tree ===============================

class Node3 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree5 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node3(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  sumLeftLeaves() {
    let sum = 0;
    
    const traverse = (node, isLeft) => {
      if (node) {
        if (!node.left && !node.right && isLeft) {
          sum += node.value;
        }
        traverse(node.left, true);
        traverse(node.right, false);
      }
    }
    
    traverse(this.root, false);
    return sum;
  }
}

// create a new BinaryTree object
const tree5 = new BinaryTree5();

// insert nodes into the tree
tree5.insert(20);
tree5.insert(9);
tree5.insert(49);
tree5.insert(5);
tree5.insert(12);
tree5.insert(23);
tree5.insert(52);
tree5.insert(15);
tree5.insert(50);

// find the sum of all left leaves in the tree
const sum = tree5.sumLeftLeaves();
document.write(`The sum of all left leaves in the tree is: ${sum}`);

// Que - 7 Find sum of all nodes of the given perfect binary tree===============================

class Node4 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class PerfectBinaryTree {
  constructor(depth) {
    this.root = this.buildPerfectTree(depth, 1);
  }

  buildPerfectTree(depth, value) {
    if (depth === 0) {
      return null;
    }
    const node = new Node4(value);
    node.left = this.buildPerfectTree(depth - 1, value * 2);
    node.right = this.buildPerfectTree(depth - 1, value * 2 + 1);
    return node;
  }

  sumNodes(node) {
    if (!node) {
      return 0;
    }
    return node.value + this.sumNodes(node.left) + this.sumNodes(node.right);
  }

  getSum() {
    return this.sumNodes(this.root);
  }
}

// create a new PerfectBinaryTree object with depth 3
const tree6 = new PerfectBinaryTree(3);

// get the sum of all nodes in the tree
const sum1 = tree6.getSum();

// print the sum in the document
document.write("<br>" + `The sum of all nodes in the perfect binary tree is: ${sum}`);

//Que - 8 Count subtress that sum up to a given value x in a binary tree=================================

class Node5 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree7 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node5(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Count the number of subtrees that sum up to a given value x
  countSubtreesWithSumX(node, x) {
    if (!node) {
      return 0;
    }

    let count = 0;
    const leftSum = this.getSubtreeSum(node.left);
    const rightSum = this.getSubtreeSum(node.right);
    const totalSum = leftSum + rightSum + node.value;

    if (totalSum === x) {
      count++;
    }

    count += this.countSubtreesWithSumX(node.left, x);
    count += this.countSubtreesWithSumX(node.right, x);

    return count;
  }

  // Get the sum of a subtree rooted at a given node
  getSubtreeSum(node) {
    if (!node) {
      return 0;
    }

    return this.getSubtreeSum(node.left) + this.getSubtreeSum(node.right) + node.value;
  }
}

// create a new BinaryTree object
const tree7 = new BinaryTree7();

// insert nodes into the tree
tree7.insert(10);
tree7.insert(-2);
tree7.insert(7);
tree7.insert(8);
tree7.insert(-4);

const x = 7;
const count = tree7.countSubtreesWithSumX(tree7.root, x);

document.write("<br>" + `The number of subtrees that sum up to ${x} is ${count}`);

//Que - 9 Find maximum level sum in Binary Tree=====================================================

class Node6 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree8 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node6(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // method to find the maximum level sum
  maxLevelSum() {
    let maxSum = -Infinity;
    let maxLevel = 1;
    let level = 1;

    // perform a level-order traversal using a queue
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const size = queue.length;
      let levelSum = 0;

      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        levelSum += node.value;

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }

      if (levelSum > maxSum) {
        maxSum = levelSum;
        maxLevel = level;
      }

      level++;
    }

    return maxLevel;
  }
}

// create a new BinaryTree object
const tree8 = new BinaryTree8();

// insert nodes into the tree
tree8.insert(1);
tree8.insert(2);
tree8.insert(3);
tree8.insert(4);
tree8.insert(5);
tree8.insert(6);
tree8.insert(7);

// find the maximum level sum
const maxLevel = tree8.maxLevelSum();

// print the result in document write
document.write("<br>" + `The maximum level sum is at level ${maxLevel}`);

//Que - 10 Print the nodes at odd levels of a tree=========================================

class Node7 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree9 {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node7(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // function to print nodes at odd levels using in-order traversal
  printOddNodes(node, level) {
    if (node == null) {
      return;
    }

    // recursively traverse left subtree
    this.printOddNodes(node.left, level + 1);

    // print node value if level is odd
    if (level % 2 !== 0) {
      document.write(node.value + " ");
    }

    // recursively traverse right subtree
    this.printOddNodes(node.right, level + 1);
  }
}

// create a new BinaryTree object
const tree9 = new BinaryTree9();

// insert nodes into the tree
tree9.insert(8);
tree9.insert(3);
tree9.insert(10);
tree9.insert(1);
tree9.insert(6);
tree9.insert(14);
tree9.insert(4);
tree9.insert(7);
tree9.insert(13);

// print nodes at odd levels
document.write("<br>" + "Nodes at odd levels: ");
tree9.printOddNodes(tree9.root, 1);
