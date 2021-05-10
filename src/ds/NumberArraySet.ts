export class NumberArraySet extends Array<number[]> {
    add(arr: number[]) {
        if (!this.has(arr)) this.push(arr);
    }

    has(arr: number[]) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].every((v, j) => v === arr[j])) return true;
        }
        return false;
    }

    remove(arr: number[]) {
        if (this.has(arr)) {
            var removeIdx = 0
            for (let i = 0; i < this.length; i++) {
                if (this[i].every((v, i) => v === arr[i])) {
                    removeIdx = i
                }
            }
            this.splice(removeIdx, 1)
        }
    }
}
