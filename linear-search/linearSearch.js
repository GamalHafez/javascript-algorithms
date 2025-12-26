/* Problem:
    Given an array of 'n' elements and a target element '1',
    find the index of the target element 't' in the array.
    Return -1 If the target element is not found.
*/

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
};
// Time Complexity: O(n)

const testArray = [1, 2, 3, 4, 5];
console.log(linearSearch(testArray, 0)); // -1
console.log(linearSearch(testArray, 1)); // 0
console.log(linearSearch(testArray, 2)); // 1
console.log(linearSearch(testArray, 5)); // 4

export default linearSearch;
