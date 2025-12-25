const fibonacci = (n) => {
  const fib = [0, 1];

  for (let i = fib.length; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};
// Time Complexity: O(n)

console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(4)); // [0, 1, 1, 2]

export default fibonacci;
