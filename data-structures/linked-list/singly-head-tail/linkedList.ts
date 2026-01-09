import Node from "../Node.ts";

class LinkedList<T> {
  private size = 0;
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  append(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
    this.size++;
  }

  removeFromFront(): T | undefined {
    if (this.isEmpty()) return;

    const removed = this.head!;
    this.head = removed.next;
    this.size--;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return removed.value;
  }

  removeFromEnd(): T | undefined {
    if (this.isEmpty()) return;
    if (this.size === 1) return this.removeFromFront();

    const removedValue = this.tail!.value;

    let prev = this.head!;
    while (prev.next !== this.tail) {
      prev = prev.next!;
    }

    prev.next = null;
    this.tail = prev;
    this.size--;
    return removedValue;
  }

  peekFront(): T | undefined {
    return this.head?.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let values = [];

    while (current) {
      values.push(String(current.value));
      current = current.next;
    }

    console.log(values.join(" "));
  }
}

export default LinkedList;
