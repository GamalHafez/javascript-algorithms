class CircularQueue<T> {
  private items: (T | undefined)[];
  private front = -1;
  private rear = -1;
  private currentLength = 0;
  private readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.items = new Array(capacity);
  }

  isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  size(): number {
    return this.currentLength;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.front];
  }

  enqueue(element: T): boolean {
    if (this.isFull()) return false;

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;

    this.currentLength++;

    if (this.front === -1) this.front++;

    return true;
  }

  dequeue(): T | undefined {
    if (!this.isEmpty()) {
      const removedItem = this.peek();
      this.items[this.front] = undefined;
      this.front = (this.front + 1) % this.capacity;

      this.currentLength--;

      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }

      return removedItem;
    }
  }
}

export default CircularQueue;
