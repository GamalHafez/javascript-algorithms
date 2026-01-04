const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) return false;
  for (n; n >= 2; n /= 2) {
    if (n % 2 !== 0) return false;
  }
  return true;
};
// Big-O = O(log n)

export default isPowerOfTwo;
