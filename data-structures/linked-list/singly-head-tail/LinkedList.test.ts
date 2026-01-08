import LinkedList from "./LinkedList";

describe("LinkedList (head + tail)", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test("should start empty", () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.getSize()).toBe(0);
  });

  test("prepend should add elements to the front", () => {
    list.prepend(10);
    list.prepend(20);

    expect(list.getSize()).toBe(2);
    expect(list.isEmpty()).toBe(false);
  });

  test("append should add elements to the end", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.getSize()).toBe(3);
    expect(list.isEmpty()).toBe(false);
  });

  test("removeFromFront should remove and return first element", () => {
    list.append(1);
    list.append(2);

    const removed = list.removeFromFront();

    expect(removed).toBe(1);
    expect(list.getSize()).toBe(1);
  });

  test("removeFromEnd should remove and return last element", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const removed = list.removeFromEnd();

    expect(removed).toBe(3);
    expect(list.getSize()).toBe(2);
  });

  test("removeFromEnd should work when only one element exists", () => {
    list.append(100);

    const removed = list.removeFromEnd();

    expect(removed).toBe(100);
    expect(list.isEmpty()).toBe(true);
  });

  test("removeFromFront on empty list should return undefined", () => {
    expect(list.removeFromFront()).toBeUndefined();
  });

  test("removeFromEnd on empty list should return undefined", () => {
    expect(list.removeFromEnd()).toBeUndefined();
  });
});
