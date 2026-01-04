const recursiveFibonacci = (n: number): number | null => {
  if (n < 0) return null; // edge case
  if (n <= 1) return n; // base case

  return recursiveFibonacci(n - 1)! + recursiveFibonacci(n - 2)!;
};

// Recursive Time Complexity: O(2ⁿ) -> Each call creates two more calls

export default recursiveFibonacci;
