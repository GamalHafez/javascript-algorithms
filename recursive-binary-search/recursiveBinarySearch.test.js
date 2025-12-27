import recursiveBinarySearch from "./recursiveBinarySearch.js";

describe("recursiveBinarySearch", () => {
  const sortedArray = [-1, 3, 7, 18, 45];

  test("returns -1 when the target is smaller than all elements", () => {
    expect(recursiveBinarySearch(sortedArray, -2)).toBe(-1);
  });

  test("returns -1 when the target is larger than all elements", () => {
    expect(recursiveBinarySearch(sortedArray, 100)).toBe(-1);
  });

  test("finds the first element", () => {
    expect(recursiveBinarySearch(sortedArray, -1)).toBe(0);
  });

  test("finds an element in the middle", () => {
    expect(recursiveBinarySearch(sortedArray, 7)).toBe(2);
  });

  test("finds the last element", () => {
    expect(recursiveBinarySearch(sortedArray, 45)).toBe(4);
  });
});
