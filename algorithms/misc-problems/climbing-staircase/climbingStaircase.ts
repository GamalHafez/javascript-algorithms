const climbingStaircase = (n: number): number => {
  const noOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
};

// Time Complexity: O(n)

export default climbingStaircase;
