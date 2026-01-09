import LinkedList from "../singly-head-tail/LinkedList.ts";

class QueueLinkedList<T> {
  private list = new LinkedList<T>();

  enqueue(value: T) {
    this.list.append(value);
  }

  dequeue(): T | undefined {
    return this.list.removeFromFront();
  }

  peek(): T | undefined {
    return this.list.peekFront();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  getSize(): number {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

export default QueueLinkedList;
