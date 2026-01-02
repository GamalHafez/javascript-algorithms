type Towers = {
  A: number[];
  B: number[];
  C: number[];
};

const TOH = (
  n: number,
  A: keyof Towers,
  B: keyof Towers,
  C: keyof Towers,
  towers: Towers
): void => {
  if (n === 1) {
    towers[C].push(towers[A].pop()!);
    return;
  }

  TOH(n - 1, A, C, B, towers);
  towers[C].push(towers[A].pop()!);
  TOH(n - 1, B, A, C, towers);
};

export default TOH;
