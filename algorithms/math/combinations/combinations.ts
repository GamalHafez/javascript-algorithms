function combinations<T>(
  arr: T[],
  k: number,
  temp: T[] = [],
  start = 0,
  result: T[][] = []
) {
  if (temp.length === k) {
    result.push([...temp]);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    temp.push(arr[i]);
    combinations(arr, k, temp, i + 1, result);
    temp.pop();
  }

  return result;
}

// Time Complexity: O(C(n, k))

export default combinations;
