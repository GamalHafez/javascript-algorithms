const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const NTI = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > NTI) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = NTI;
  }

  return arr;
};
// Time Complexity: O(n²)

export default insertionSort;
