import fibonacci from "./fibonacci.iterative";
// TODO: Install and configure a test runner (Jest/Vitest) for this test file

describe("fibonacci", () => {
  test("returns the first n Fibonacci numbers", () => {
    expect(fibonacci(1)).toEqual([0]);
    expect(fibonacci(2)).toEqual([0, 1]);
    expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
