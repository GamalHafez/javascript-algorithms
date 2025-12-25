import factorial from "./factorial";

describe("factorial", () => {
  test("returns 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("returns 1 for 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("returns correct factorial for small numbers", () => {
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  test("returns correct factorial for larger numbers", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
