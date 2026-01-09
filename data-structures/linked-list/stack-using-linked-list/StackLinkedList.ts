import LinkedList from "../singly-head-tail/LinkedList.ts";

class StackLinkedList<T> {
  private list = new LinkedList<T>();

  push(value: T) {
    this.list.prepend(value);
  }

  pop(): T | undefined {
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

export default StackLinkedList;
