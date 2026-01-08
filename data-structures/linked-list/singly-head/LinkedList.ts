import Node from "../Node.ts";

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size = 0;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T) {
    // Time Complexity: O(1)
    const node = new Node(value);

    if (!this.isEmpty()) {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  append(value: T) {
    // Time Complexity: O(n)
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head!;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);

    let prev = this.head!;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next!;
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  removeFrom(index: number): T | undefined {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      const removed = this.head!;
      this.head = removed.next;
      this.size--;
      return removed.value;
    }

    let prev = this.head!;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next!;
    }

    const removed = prev.next!;
    prev.next = removed.next;
    this.size--;
    return removed.value;
  }

  removeValue(value: T): T | undefined {
    if (this.isEmpty()) return;

    if (this.head?.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let prev = this.head!;
    let current = prev.next;
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        this.size--;
        return value;
      }
      prev = current;
      current = current.next;
    }
  }

  search(value: T): number {
    if (this.isEmpty()) return -1;

    let current = this.head!;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) return i;
      current = current.next!;
    }

    return -1;
  }

  reverse() {
    if (this.size < 2) return;

    let prev: Node<T> | null = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let values: string[] = [];

    while (current) {
      values.push(String(current.value));
      current = current.next;
    }

    console.log(values.join(" "));
  }
}

export default LinkedList;
