import CircularQueue from "./circularQueue";

describe("CircularQueue", () => {
  let queue: CircularQueue<number>;

  beforeEach(() => {
    queue = new CircularQueue<number>(3);
  });

  test("starts empty", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  test("enqueue adds elements until full", () => {
    expect(queue.enqueue(1)).toBe(true);
    expect(queue.enqueue(2)).toBe(true);
    expect(queue.enqueue(3)).toBe(true);

    expect(queue.isFull()).toBe(true);
    expect(queue.size()).toBe(3);
    expect(queue.enqueue(4)).toBe(false);
  });

  test("dequeue removes elements in FIFO order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();

    expect(queue.isEmpty()).toBe(true);
  });

  test("peek returns front element without removing it", () => {
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.peek()).toBe(10);
    expect(queue.size()).toBe(2);
  });

  test("wraps around correctly (circular behavior)", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();

    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.peek()).toBe(3);
    expect(queue.size()).toBe(3);
    expect(queue.isFull()).toBe(true);
  });
});
