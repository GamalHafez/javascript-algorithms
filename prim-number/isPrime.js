const isPrime = (n) => {
  if (n < 2) return false;

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
// Time Complexity: O(sqrt(n)) or O(√n)

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true

export default isPrime;
