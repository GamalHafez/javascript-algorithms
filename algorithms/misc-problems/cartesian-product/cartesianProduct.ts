function cartesianProduct<T1, T2>(arrA: T1[], arrB: T2[]): [T1, T2][] {
  if (!arrA.length || !arrB.length) return [];

  const AB: [T1, T2][] = [];

  for (let a = 0; a < arrA.length; a++) {
    for (let b = 0; b < arrB.length; b++) {
      AB.push([arrA[a], arrB[b]]);
    }
  }

  return AB;
}
// Time Complexity: O(nm)

export default cartesianProduct;
