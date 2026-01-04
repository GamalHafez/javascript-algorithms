/* Problem:
    Given an array of 'n' elements and a target element '1',
    find the index of the target element 't' in the array.
    Return -1 If the target element is not found.
*/

const linearSearch = (array: number[], target: number): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
};
// Time Complexity: O(n)

export default linearSearch;
