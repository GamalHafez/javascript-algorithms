import factorial from "./factorial.iterative.js";
import recursiveFactorial from "./factorial.recursive.js";

describe("Factorial implementations", () => {
  const implementations = [
    {
      name: "Iterative Factorial",
      fn: factorial,
    },
    {
      name: "Recursive Factorial",
      fn: recursiveFactorial,
    },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test("returns null for negative numbers", () => {
        expect(fn(-1)).toBeNull();
        expect(fn(-10)).toBeNull();
      });

      test("returns 1 for 0", () => {
        expect(fn(0)).toBe(1);
      });

      test("returns 1 for 1", () => {
        expect(fn(1)).toBe(1);
      });

      test("calculates factorial for positive numbers", () => {
        expect(fn(4)).toBe(24);
        expect(fn(5)).toBe(120);
      });
    });
  });
});
