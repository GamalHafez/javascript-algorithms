const recursiveFactorial = (n) => {
  if (n < 0) return null; // Edge case
  if (n === 0) return 1; // Base case
  return n * recursiveFactorial(n - 1);
};
// Time Complexity: O(n)

console.log(recursiveFactorial(-1)); //null
console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(1)); //1
console.log(recursiveFactorial(4)); //24

export default recursiveFactorial;
