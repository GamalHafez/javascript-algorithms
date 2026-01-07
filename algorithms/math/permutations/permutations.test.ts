import permutations from "./permutations";

describe("permutations", () => {
  test("returns all permutations of a 3-element array", () => {
    const result = permutations([1, 2, 3]);

    expect(result).toHaveLength(6);
    expect(result).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    );
  });

  test("works with string elements", () => {
    const result = permutations(["A", "B", "C"]);

    expect(result).toHaveLength(6);
    expect(result).toContainEqual(["A", "B", "C"]);
    expect(result).toContainEqual(["C", "B", "A"]);
  });

  test("returns single permutation for single element array", () => {
    expect(permutations([42])).toEqual([[42]]);
  });
});
