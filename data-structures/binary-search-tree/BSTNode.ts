class BSTNode<T> {
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export default BSTNode;
