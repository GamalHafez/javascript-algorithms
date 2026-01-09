import { describe, it, expect, beforeEach } from "vitest";
import StackLinkedList from "./StackLinkedList";

describe("StackLinkedList", () => {
  let stack: StackLinkedList<number>;

  beforeEach(() => {
    stack = new StackLinkedList<number>();
  });

  it("should start empty", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

  it("should push elements onto the stack", () => {
    stack.push(10);
    stack.push(20);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(2);
    expect(stack.peek()).toBe(20);
  });

  it("should follow LIFO order when popping", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("should update size correctly after pop", () => {
    stack.push(5);
    stack.push(6);

    stack.pop();

    expect(stack.getSize()).toBe(1);
    expect(stack.peek()).toBe(5);
  });

  it("peek should not remove the top element", () => {
    stack.push(100);
    stack.push(200);

    expect(stack.peek()).toBe(200);
    expect(stack.getSize()).toBe(2);
  });

  it("should work with generic types (string)", () => {
    const stringStack = new StackLinkedList<string>();

    stringStack.push("a");
    stringStack.push("b");

    expect(stringStack.pop()).toBe("b");
    expect(stringStack.peek()).toBe("a");
  });
});
