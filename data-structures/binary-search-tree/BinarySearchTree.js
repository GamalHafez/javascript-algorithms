import BSTNode from "./BSTNode.js";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new BSTNode(value);

    if (this.isEmpty()) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  contains(value, root = this.root) {
    if (!root) return false;
    if (root.value === value) return true;

    if (value < root.value) {
      return this.contains(value, root.left);
    } else {
      return this.contains(value, root.right);
    }
  }
}

export default BinarySearchTree;
