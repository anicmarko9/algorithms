function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp: number = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(
  array: number[],
  pivotIndex: number = 0,
  endIndex: number = array.length - 1,
): number {
  let swapIndex: number = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

export function quickSort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1,
): number[] {
  if (left < right) {
    const pivotIndex: number = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
