import climbingStaircase from "./climbingStaircase";

describe("climbingStaircase", () => {
  test("returns 1 way for 1 step", () => {
    expect(climbingStaircase(1)).toBe(1);
  });

  test("returns 2 ways for 2 steps", () => {
    expect(climbingStaircase(2)).toBe(2);
  });

  test("returns correct number of ways for 3 steps", () => {
    expect(climbingStaircase(3)).toBe(3); // 1+1+1, 1+2, 2+1
  });

  test("returns correct number of ways for 4 steps", () => {
    expect(climbingStaircase(4)).toBe(5); // Fibonacci sequence
  });

  test("returns correct number of ways for 5 steps", () => {
    expect(climbingStaircase(5)).toBe(8);
  });
});
