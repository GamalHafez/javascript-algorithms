import recursiveFibonacci from "./recursiveFibonacci";

describe("recursiveFibonacci", () => {
  test("returns null for negative numbers", () => {
    expect(recursiveFibonacci(-1)).toBeNull();
    expect(recursiveFibonacci(-10)).toBeNull();
  });

  test("handles base cases correctly", () => {
    expect(recursiveFibonacci(0)).toBe(0);
    expect(recursiveFibonacci(1)).toBe(1);
  });

  test("returns correct Fibonacci numbers for n > 1", () => {
    expect(recursiveFibonacci(2)).toBe(1);
    expect(recursiveFibonacci(3)).toBe(2);
    expect(recursiveFibonacci(4)).toBe(3);
    expect(recursiveFibonacci(5)).toBe(5);
    expect(recursiveFibonacci(6)).toBe(8);
  });
});
