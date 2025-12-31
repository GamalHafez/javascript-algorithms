const fibonacci = (n: number): number[] => {
  const fib = [0, 1];

  for (let i = fib.length; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};
// Time Complexity: O(n)

export default fibonacci;
