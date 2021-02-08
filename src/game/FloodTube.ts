import { stringify } from "querystring"
import { Cell } from "./Cell"





// const HORIZONTAL:   [string, number] = ['i', 0]
// const VERTICAL:     [string, number] = ['i', 1]

// const DLEFT:    [string, number] = ['d', 0]
// const DDOWN:    [string, number] = ['d', 1]
// const DRIGHT:   [string, number] = ['d', 2]
// const DUP:      [string, number] = ['d', 3]

// const TLEFT:    [string, number] = ['t', 0]
// const TDOWN:    [string, number] = ['t', 1]
// const TRIGHT:   [string, number] = ['t', 2]
// const TUP:      [string, number] = ['t', 3]

export class FloodTubes {
    
    private board: Cell[][]
    private R: number
    private C: number

    private dirs: Map<string, number[][]>

    constructor(row: number, col: number) {

        // init board
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let node = new Cell(i, j, 'i0', false, false, false)
                this.board[i].push(node)
            }
        }

        this.board[2][3].type = 'start'
        this.board[6][6].type = 'finish'
        this.board[0][0].type = 'blank'
        this.board[0][1].type = 'blank'
        this.board[0][2].type = 'blank'
        this.board[0][5].type = 'blank'
        this.board[1][5].type = 'blank'
        this.board[2][5].type = 'blank'
        this.board[3][2].type = 'd1'
        this.board[2][1].type = 'd3'
        this.board[8][1].type = 't3'
        this.board[8][6].type = 't2'
        this.board[7][6].type = 't2'
        this.board[8][4].type = 't2'
        this.board[7][7].type = '4ways'


        
        // set dirs
        this.dirs = new Map()
        this.dirs.set('i0', [[1, 0], [-1, 0]])
        this.dirs.set('i1', [[0, 1], [0, -1]])

        this.dirs.set('d0', [[1, 0], [0, 1]])
        this.dirs.set('d1', [[1, 0], [0, -1]])
        this.dirs.set('d2', [[-1, 0], [0, -1]])
        this.dirs.set('d3', [[-1, 0], [0, 1]])



    }

    public BFS() {
        let seen: boolean[][] = []
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
            }
        }

        let layer = []
        // <i, j, distance, type, curposition>
        let q: number[][] = [[0, 0, 0]]
        seen[0][0] = true
        while (q.length != 0) {
            let front = q.shift()
            let [i, j, d] = front!
            let size = q.length
            for (const [ni, nj] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
                if (this.isWithinBound(ni, nj) && (!seen[ni][nj])) {
                    q.push([ni, nj, d + 1])
                    layer.push([ni, nj])
                    seen[ni][nj] = true

                    this.board[ni][nj].isPartPath = true
                }
            }
        }
        return layer
    }

    public rotate(r: number, c: number, t: string) {

        if (t === 'start' || t === 'finish') return
        if (t === '4ways') return

        let newIndex: number = -1

        let type = t.charAt(0)
        let curIndex: number = +t.charAt(1)

        if (type === 'i') newIndex = (curIndex + 1) % 2
        if (type === 't' || type === 'd') newIndex = (curIndex + 1) % 4
        // this.board[r][c] = [type, newIndex]

        // change the type
        let cell = this.board[r][c]
        console.log(type + newIndex + '')
        console.log(cell)
        cell.type = type + newIndex + ''
        
    }

    public reset(level: string) {

    }

    public move(r: number, c: number) {

    }

    public win() {

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