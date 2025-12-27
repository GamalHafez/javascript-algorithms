const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  for (n; n >= 2; n /= 2) {
    if (n % 2 !== 0) return false;
  }
  return true;
};
// Big-O = O(log n)

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

export default isPowerOfTwo;
