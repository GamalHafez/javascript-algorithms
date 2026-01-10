import { describe, test, expect } from "vitest";
import combinations from "./combinations";

describe("combinations", () => {
  test("returns all combinations of length k", () => {
    expect(combinations([1, 2, 3], 1)).toEqual([[1], [2], [3]]);

    expect(combinations([1, 2, 3], 2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);

    expect(combinations([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test("works with strings", () => {
    expect(combinations(["A", "B", "C"], 2)).toEqual([
      ["A", "B"],
      ["A", "C"],
      ["B", "C"],
    ]);
  });

  test("returns empty array for invalid k", () => {
    expect(combinations([1, 2, 3], 0)).toEqual([]);
    expect(combinations([1, 2, 3], 4)).toEqual([]);
  });
});
