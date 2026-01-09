import { describe, it, expect, beforeEach } from "vitest";
import QueueLinkedList from "./QueueLinkedList";

describe("QueueLinkedList", () => {
  let queue: QueueLinkedList<number>;

  beforeEach(() => {
    queue = new QueueLinkedList<number>();
  });

  it("should start empty", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  it("should enqueue elements", () => {
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(2);
    expect(queue.peek()).toBe(10);
  });

  it("should dequeue elements in FIFO order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it("should update size correctly after dequeue", () => {
    queue.enqueue(5);
    queue.enqueue(6);

    queue.dequeue();

    expect(queue.getSize()).toBe(1);
    expect(queue.peek()).toBe(6);
  });

  it("should return undefined when dequeueing from empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.peek()).toBeUndefined();
  });

  it("should work correctly after enqueueing again post-empty", () => {
    queue.enqueue(1);
    queue.dequeue();

    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(2);
    expect(queue.getSize()).toBe(2);
  });
});
