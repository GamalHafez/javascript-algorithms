import binarySearch from "./binarySearch";

describe("binarySearch", () => {
  const sortedArray = [-1, 3, 7, 18, 45];

  test("returns -1 when target is not found", () => {
    expect(binarySearch(sortedArray, 0)).toBe(-1);
    expect(binarySearch(sortedArray, 100)).toBe(-1);
  });

  test("finds target at the beginning of the array", () => {
    expect(binarySearch(sortedArray, -1)).toBe(0);
  });

  test("finds target in the middle of the array", () => {
    expect(binarySearch(sortedArray, 7)).toBe(2);
    expect(binarySearch(sortedArray, 18)).toBe(3);
  });

  test("finds target at the end of the array", () => {
    expect(binarySearch(sortedArray, 45)).toBe(4);
  });
});
