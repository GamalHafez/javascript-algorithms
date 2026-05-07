import BSTNode from "./BSTNode.ts";
import Queue from "../queue/queue.ts";
class BinarySearchTree<T extends number | string> {
  private root: BSTNode<T> | null = null;

  isEmpty(): boolean {
    return this.root === null;
  }

  insert(value: T) {
    const node = new BSTNode<T>(value);

    if (this.isEmpty()) {
      this.root = node;
      return;
    }

    this.root && this.insertNode(this.root, node);
  }

  insertNode(root: BSTNode<T>, newNode: BSTNode<T>) {
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

  contains(value: T, root = this.root): boolean {
    if (!root) return false;
    if (root.value === value) return true;

    if (value < root.value) {
      return this.contains(value, root.left);
    } else {
      return this.contains(value, root.right);
    }
  }

  preOrder(root = this.root, result: T[] = []): T[] {
    if (root) {
      result.push(root.value);

      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }

    return result;
  }

  inOrder(root = this.root, result: T[] = []): T[] {
    if (root) {
      this.inOrder(root.left, result);

      result.push(root.value);

      this.inOrder(root.right, result);
    }

    return result;
  }

  postOrder(root = this.root, result: T[] = []): T[] {
    if (root) {
      this.postOrder(root.left, result);

      this.postOrder(root.right, result);

      result.push(root.value);
    }

    return result;
  }

  levelOrder(): T[] {
    const result: T[] = [];
    if (this.isEmpty()) return result;

    const queue = new Queue<BSTNode<T>>();

    this.root && queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      node && result.push(node.value);

      if (node?.left) {
        queue.enqueue(node.left);
      }

      if (node?.right) {
        queue.enqueue(node.right);
      }
    }

    return result;
  }

  min(root = this.root): T | undefined {
    if (this.isEmpty()) return undefined;

    let current = root;
    if (!current) return undefined;

    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  max(root = this.root): T | undefined {
    if (this.isEmpty()) return undefined;

    let current = root;
    if (!current) return undefined;

    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  delete(value: T) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root: BSTNode<T> | null, value: T): BSTNode<T> | null {
    if (!root) return root; // Base case

    // Recursion until we reach the Node to be deleted
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // 1. Delete a leaf node
      if (!root.left && !root.right) return null;

      // 2. Node has one child
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      // 3. Node has two child
      const minVal = this.min(root.right);
      if (!minVal) return root;
      root.value = minVal;
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

export default BinarySearchTree;
