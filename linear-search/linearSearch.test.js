import linearSearch from "./linearSearch";

describe("linearSearch", () => {
  const testArray = [1, 2, 3, 4, 5];

  test("returns -1 when target is not found", () => {
    expect(linearSearch(testArray, 0)).toBe(-1);
    expect(linearSearch(testArray, 6)).toBe(-1);
  });

  test("finds target at the beginning of the array", () => {
    expect(linearSearch(testArray, 1)).toBe(0);
  });

  test("finds target in the middle of the array", () => {
    expect(linearSearch(testArray, 3)).toBe(2);
  });

  test("finds target at the end of the array", () => {
    expect(linearSearch(testArray, 5)).toBe(4);
  });
});
