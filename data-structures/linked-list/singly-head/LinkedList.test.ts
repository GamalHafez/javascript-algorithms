import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it("should start empty", () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.getSize()).toBe(0);
    expect(list.search(1)).toBe(-1);
  });

  it("should prepend elements correctly", () => {
    list.prepend(10);
    list.prepend(20);

    expect(list.getSize()).toBe(2);
    expect(list.search(20)).toBe(0);
    expect(list.search(10)).toBe(1);
  });

  it("should append elements correctly", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.getSize()).toBe(3);
    expect(list.search(1)).toBe(0);
    expect(list.search(3)).toBe(2);
  });

  it("should insert elements at given index", () => {
    list.append(1);
    list.append(3);
    list.insert(2, 1); // insert 2 between 1 and 3

    expect(list.getSize()).toBe(3);
    expect(list.search(2)).toBe(1);
  });

  it("should remove elements from index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const removed = list.removeFrom(1); // remove 2
    expect(removed).toBe(2);
    expect(list.getSize()).toBe(2);
    expect(list.search(2)).toBe(-1);
  });

  it("should remove elements by value", () => {
    list.append(5);
    list.append(10);
    list.append(15);

    const removed = list.removeValue(10);
    expect(removed).toBe(10);
    expect(list.getSize()).toBe(2);
    expect(list.search(10)).toBe(-1);
  });

  it("should reverse the list", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.reverse();

    expect(list.search(1)).toBe(2);
    expect(list.search(3)).toBe(0);
  });

  it("should handle single element reverse", () => {
    list.append(1);
    list.reverse();

    expect(list.getSize()).toBe(1);
    expect(list.search(1)).toBe(0);
  });

  it("should handle empty reverse", () => {
    list.reverse();

    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  it("should return -1 when searching for non-existing value", () => {
    list.append(1);
    expect(list.search(99)).toBe(-1);
  });

  it("should handle removeFrom on empty list gracefully", () => {
    expect(list.removeFrom(0)).toBeUndefined();
  });

  it("should handle removeValue on empty list gracefully", () => {
    expect(list.removeValue(0)).toBeUndefined();
  });
});
