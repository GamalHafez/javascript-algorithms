import Queue from "./queue";

describe("Queue Data Structure", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("should start empty", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("should enqueue elements correctly", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  test("should dequeue elements in FIFO order", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.size()).toBe(1);
  });

  test("should return undefined when dequeueing from empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test("should peek the front element without removing it", () => {
    queue.enqueue(5);
    queue.enqueue(15);

    expect(queue.peek()).toBe(5);
    expect(queue.size()).toBe(2);
  });
});
