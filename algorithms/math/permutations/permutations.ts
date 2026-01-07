function permutations<T>(arr: T[], fixed = 0, result: T[][] = []) {
  if (fixed === arr.length - 1) {
    result.push([...arr]);
    return;
  }

  for (let i = fixed; i < arr.length; i++) {
    const swap = arr[i];

    arr[i] = arr[fixed];
    arr[fixed] = swap;

    permutations(arr, fixed + 1, result);

    arr[fixed] = arr[i];
    arr[i] = swap;
  }

  return result;
}
// Time Complexity: O(n!)

export default permutations;
