import isPowerOfTwo from "./isPowerOfTwo";

describe("isPowerOfTwo", () => {
  test("returns false for numbers less than 1", () => {
    expect(isPowerOfTwo(0)).toBe(false);
    expect(isPowerOfTwo(-1)).toBe(false);
    expect(isPowerOfTwo(-8)).toBe(false);
  });

  test("returns true for powers of two", () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(8)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(1024)).toBe(true);
  });

  test("returns false for non-powers of two", () => {
    expect(isPowerOfTwo(3)).toBe(false);
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(6)).toBe(false);
    expect(isPowerOfTwo(10)).toBe(false);
    expect(isPowerOfTwo(18)).toBe(false);
  });
});
