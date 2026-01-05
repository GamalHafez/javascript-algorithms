class Queue<T> {
  private items: Record<number, T> = {};
  private front = 0;
  private rear = 0;

  enqueue(element: T): void {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    }

    return item;
  }
  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.front];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.rear - this.front;
  }
}

export default Queue;
