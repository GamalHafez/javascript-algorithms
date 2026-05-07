import BSTNode from "./BSTNode.js";
import Queue from "../queue/queue.ts";
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

  preOrder(root = this.root, result = []) {
    if (root) {
      result.push(root.value);

      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }

    return result;
  }

  inOrder(root = this.root, result = []) {
    if (root) {
      this.inOrder(root.left, result);

      result.push(root.value);

      this.inOrder(root.right, result);
    }

    return result;
  }

  postOrder(root = this.root, result = []) {
    if (root) {
      this.postOrder(root.left, result);

      this.postOrder(root.right, result);

      result.push(root.value);
    }

    return result;
  }

  levelOrder() {
    if (this.isEmpty()) return [];

    const queue = new Queue();
    const result = [];

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      result.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return result;
  }
}

export default BinarySearchTree;
