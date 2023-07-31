function merge(array1: number[], array2: number[]): number[] {
  let combined: number[] = [];
  let i: number = 0;
  let j: number = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

export function mergeSort(array: number[]): number[] {
  if (array.length === 1) return array;

  let mid: number = Math.floor(array.length / 2);
  let left: number[] = array.slice(0, mid);
  let right: number[] = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
