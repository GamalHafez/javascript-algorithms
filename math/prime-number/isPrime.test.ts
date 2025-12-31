import isPrime from "./isPrime";

describe("isPrime", () => {
  test("returns false for numbers less than 2", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test("returns true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test("returns false for non-prime numbers", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  test("handles larger prime numbers", () => {
    expect(isPrime(997)).toBe(true);
  });
});
