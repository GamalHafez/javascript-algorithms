const recursiveFactorial = (n: number): number | null => {
  if (n < 0) return null; // Edge case
  if (n === 0) return 1; // Base case

  const result = recursiveFactorial(n - 1);

  if (result === null) return null;

  return n * result;
};
// Time Complexity: O(n)

export default recursiveFactorial;
