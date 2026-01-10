class HashTable<T> {
  private table: [string, T][][];
  private readonly size: number;
  constructor(size: number) {
    this.size = size;
    this.table = new Array(this.size);
  }

  private hash(key: string): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key: string, value: T) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key: string): T | undefined {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }

    return undefined;
  }

  remove(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return false;

    const itemIndex = bucket.findIndex((item) => item[0] === key);
    if (itemIndex === -1) return false;

    bucket.splice(itemIndex, 1);
    return true;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

export default HashTable;
