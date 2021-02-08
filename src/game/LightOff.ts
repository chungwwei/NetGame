export class LightOff {
    
    private board: number[][]
    private R: number
    private C: number

    constructor(row: number, col: number) {
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                this.board[i].push(0)
            }
        }
        console.log(this.board)
    }

    public move(r: number, c: number) {

        this.board[r][c] ^= 1
        for (var cell of [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]) {
            let i = cell[0]
            let j = cell[1]
            if (this.isWithinBound(i, j)) {
                this.board[i][j] ^= 1
            }
        }
    }

    public win() {
        let cnt = this.R * this.C
        for (let i = 0; i < this.R; i ++) {
            for (let j = 0; j < this. C; j ++) {
                if (this.board[i][j] === 0) cnt -= 1
            }
        }
        return cnt === 0
    }

    public isWithinBound(i: number, j: number) {
        if (i >= 0 && i < this.R && j >= 0 && j < this.C)
            return true
        return false
    }

    public getBoard() {
        return this.board
    }
}