export class HashTable {
  dataMap: Array<[string, number][]>;

  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // O(1)
  // worst: O(n)
  private _hash(key: string): number {
    let hash: number = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  // O(1)
  // worst: O(n)
  set(key: string, value: number): this {
    let index: number = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  // O(1)
  // worst: O(n)
  get(key: string): number | null {
    let index: number = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return null;
  }

  // O(1)
  // worst: O(n^2)
  keys(): string[] {
    let allKeys: string[] = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

// from nested loops O(n^2) to separated loops O(n)
// check if the two arrays have the same item
function itemInCommon(arr1: number[], arr2: number[]): boolean {
  let obj: { [key: number]: boolean } = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }
  return false;
}
