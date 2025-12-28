import insertionSort from "./insertionSort";

describe("insertionSort", () => {
  test("sorts an array of positive numbers", () => {
    expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  test("sorts an array with negative numbers", () => {
    expect(insertionSort([1, -3, 7, 4, -2])).toEqual([-3, -2, 1, 4, 7]);
  });

  test("sorts an already sorted array", () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse sorted array", () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles duplicate values", () => {
    expect(insertionSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });
});
