const bubbleSort = (arr: number[]): number[] => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const adjacent = arr[i + 1];

      if (arr[i] > adjacent) {
        arr[i + 1] = arr[i];
        arr[i] = adjacent;
        isSorted = false;
      }
    }
  }

  return arr;
};
// Time Complexity: O(n²)

export default bubbleSort;
