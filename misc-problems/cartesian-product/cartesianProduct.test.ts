import cartesianProduct from "./cartesianProduct";

describe("cartesianProduct", () => {
  test("returns empty array when first array is empty", () => {
    expect(cartesianProduct([], [1, 2])).toEqual([]);
  });

  test("returns empty array when both arrays are empty", () => {
    expect(cartesianProduct([], [])).toEqual([]);
  });

  test("returns correct cartesian product for numbers and strings", () => {
    expect(cartesianProduct([1, 2], ["a", "b"])).toEqual([
      [1, "a"],
      [1, "b"],
      [2, "a"],
      [2, "b"],
    ]);
  });

  test("works with numbers only", () => {
    expect(cartesianProduct([1, 2], [3, 4])).toEqual([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ]);
  });
});
