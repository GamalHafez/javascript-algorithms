import gcd from "./gcd";

describe("gcd (Euclidean Algorithm)", () => {
  test("returns the correct GCD for basic cases", () => {
    expect(gcd(10, 5)).toBe(5);
    expect(gcd(8, 12)).toBe(4);
    expect(gcd(7, 13)).toBe(1);
  });

  test("works with larger numbers", () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(270, 192)).toBe(6);
  });

  test("handles edge cases with zero", () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
    expect(gcd(0, 0)).toBe(0);
  });

  test("works when both numbers are equal", () => {
    expect(gcd(9, 9)).toBe(9);
    expect(gcd(42, 42)).toBe(42);
  });
});
