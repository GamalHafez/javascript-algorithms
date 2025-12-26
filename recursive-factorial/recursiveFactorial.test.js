import recursiveFactorial from "./recursiveFactorial";

describe("recursiveFactorial", () => {
  test("returns null for negative numbers", () => {
    expect(recursiveFactorial(-1)).toBeNull();
    expect(recursiveFactorial(-5)).toBeNull();
  });

  test("handles base case correctly", () => {
    expect(recursiveFactorial(0)).toBe(1);
  });

  test("returns correct factorial values for positive integers", () => {
    expect(recursiveFactorial(1)).toBe(1);
    expect(recursiveFactorial(2)).toBe(2);
    expect(recursiveFactorial(3)).toBe(6);
    expect(recursiveFactorial(4)).toBe(24);
    expect(recursiveFactorial(5)).toBe(120);
  });
});
