/*Problem:
  Given a sorted array of 'n' elements and a target element 't'
  find the index of in the array.
  Return -1 if the target element is not found.*/

const binarySearch = (array, target) => {
  let from = 0;
  let to = array.length - 1;

  while (from <= to) {
    const middleIndex = Math.floor((from + to) / 2);
    const middleElement = array[middleIndex];

    if (middleElement === target) {
      return middleIndex;
    } else if (target > middleElement) {
      from = middleIndex + 1;
    } else {
      to = middleIndex - 1;
    }
  }

  return -1;
};

// Time Complexity: O(log(n))

const arr = [-1, 3, 7, 18, 45];
console.log(binarySearch(arr, -1)); // 0
console.log(binarySearch(arr, 7)); // 2
console.log(binarySearch(arr, 45)); // 4

export default binarySearch;
