const recursiveFibonacci = (n) => {
  if (n < 0) return null; // edge case
  if (n <= 1) return n; // base case
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
// Iterative Time Complexity: O(n)
// Recursive Time Complexity: O(2ⁿ) -> Each call creates two more calls

console.log(recursiveFibonacci(-1)); // null
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

export default recursiveFibonacci;
