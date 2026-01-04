import binarySearchIterative from "./binarySearch.iterative.js";
import binarySearchRecursive from "./binarySearch.recursive.js";

describe("Binary Search Implementations", () => {
  const implementations = [
    {
      name: "Iterative Binary Search",
      fn: binarySearchIterative,
    },
    {
      name: "Recursive Binary Search",
      fn: binarySearchRecursive,
    },
  ];

  const sortedArray = [-1, 3, 7, 18, 45];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test("returns -1 when target is not found", () => {
        expect(fn(sortedArray, 100)).toBe(-1);
      });

      test("finds the first element", () => {
        expect(fn(sortedArray, -1)).toBe(0);
      });

      test("finds a middle element", () => {
        expect(fn(sortedArray, 7)).toBe(2);
      });

      test("finds the last element", () => {
        expect(fn(sortedArray, 45)).toBe(4);
      });
    });
  });
});
