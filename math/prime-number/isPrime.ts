const isPrime = (n: number): boolean => {
  if (n < 2) return false;

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
// Time Complexity: O(sqrt(n)) or O(√n)

export default isPrime;
