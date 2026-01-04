import mergeSort from "./mergeSort";

describe("mergeSort", () => {
  test("sorts an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(mergeSort([4, 1, 3, 2])).toEqual([1, 2, 3, 4]);
  });

  test("sorts an array with negative numbers", () => {
    expect(mergeSort([-3, 10, 0, -1])).toEqual([-3, -1, 0, 10]);
  });

  test("sorts an array with duplicate values", () => {
    expect(mergeSort([5, 3, 5, 2, 2])).toEqual([2, 2, 3, 5, 5]);
  });
});
