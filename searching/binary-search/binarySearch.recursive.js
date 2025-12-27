/*Problem:
    Given a sorted array of 'n' elements and a target element 't',
    find the Index of in the array Return -1 if the target element is not found.
 */

const recursiveBinarySearch = (
  arr,
  target,
  left = 0,
  right = arr.length - 1
) => {
  if (left > right) return -1; // Base case: search space is empty

  const middle = Math.floor((left + right) / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return middle;
  } else if (target > middleValue) {
    return recursiveBinarySearch(arr, target, middle + 1, right);
  } else {
    return recursiveBinarySearch(arr, target, left, middle - 1);
  }
};
// Time Complexity: O(log(n))

export default recursiveBinarySearch;
