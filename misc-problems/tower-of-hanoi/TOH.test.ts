import TOH from "./TOH";

describe("Tower of Hanoi", () => {
  it("moves all disks from A to C for n = 3", () => {
    const towers = {
      A: [3, 2, 1],
      B: [],
      C: [],
    };

    TOH(3, "A", "B", "C", towers);

    expect(towers.A).toEqual([]);
    expect(towers.B).toEqual([]);
    expect(towers.C).toEqual([3, 2, 1]);
  });

  it("moves one disk correctly (n = 1)", () => {
    const towers = {
      A: [1],
      B: [],
      C: [],
    };

    TOH(1, "A", "B", "C", towers);

    expect(towers.A).toEqual([]);
    expect(towers.C).toEqual([1]);
  });

  it("works for n = 2", () => {
    const towers = {
      A: [2, 1],
      B: [],
      C: [],
    };

    TOH(2, "A", "B", "C", towers);

    expect(towers.A).toEqual([]);
    expect(towers.B).toEqual([]);
    expect(towers.C).toEqual([2, 1]);
  });
});
