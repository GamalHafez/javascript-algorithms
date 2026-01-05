import { Stack } from "./stack";

describe("Stack Data Structure", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test("should start empty", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test("should push elements onto the stack", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should pop elements in LIFO order", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test("should return undefined when popping from empty stack", () => {
    expect(stack.pop()).toBeUndefined();
  });

  test("should peek the top element without removing it", () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
  });
});
