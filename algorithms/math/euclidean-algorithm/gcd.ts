const gcd = (a: number, b: number): number => {
  if (b === 0) return a; // Base case

  return gcd(b, a % b);
};

// Time Complexity: O(log n), where n = min(a, b)

export default gcd;
