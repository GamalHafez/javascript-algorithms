export const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
// Big O: O(n)

// Example usages:
factorial(0); // 1
factorial(1); // 1
factorial(4); // 24
factorial(5); // 120
