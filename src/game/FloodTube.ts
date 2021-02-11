import { stringify } from "querystring"
import { Cell } from "./Cell"
import { LevelManager } from "./LevelManager"






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

    private levelManager: LevelManager
    private levels: Map<string, string[][][]>

    constructor(row: number, col: number) {

        this.levelManager = new LevelManager()
        this.levels = this.levelManager.levels

        // init board
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let node = new Cell(i, j, 'blank', false, false, false)
                this.board[i].push(node)
            }
        }
        
        // set dirs
        this.dirs = new Map()
        this.dirs.set('i0', [[1, 0], [-1, 0]])
        this.dirs.set('i1', [[0, -1], [0, 1]])

        this.dirs.set('d0', [[-1, 0], [0, 1]])
        this.dirs.set('d1', [[1, 0], [0, 1]])
        this.dirs.set('d2', [[1, 0], [0, -1]])
        this.dirs.set('d3', [[-1, 0], [0, -1]])


        this.dirs.set('t0', [[-1, 0], [0, -1], [0, 1]])
        this.dirs.set('t1', [[1, 0], [-1, 0], [0, 1]])
        this.dirs.set('t2', [[0, 1], [0, -1], [1, 0]])
        this.dirs.set('t3', [[1, 0], [-1, 0], [0, -1]])

        this.dirs.set('e0', [[-1, 0]])
        this.dirs.set('e1', [[0, 1]])
        this.dirs.set('e2', [[1, 0]])
        this.dirs.set('e3', [[0, -1]])

        this.dirs.set('blank', [[]])
        this.dirs.set('4ways', [[1, 0], [-1, 0], [0, -1], [0, 1]])
        this.dirs.set('start', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        
    }

    private isCompatible(dx: number, dy: number, lst: number[][]): boolean {
        console.log(lst)
        for (const[x, y] of lst) {
            if (dx === -x && dy === -y) {
                return true
            }
        }
        return false
        
    }

    public wrappingBFS() {
        let seen: boolean[][] = []
        let q: any[][] = []        // <i, j, distance, type>
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
                if (this.board[i][j].type === 'start') {
                    seen[i][j] = true
                    q.push([i, j, 0, 'start'])
                }
            }
        }

        let layer = []
        while (q.length != 0) {
            let front = q.shift()
            let [i, j, d, type] = front!
            let size = q.length
            let dirs = this.dirs.get(type)
            if (type === 'end') return layer
            for (const [dx, dy] of dirs!) {
                let ni = (i + dx + this.R) % this.R
                let nj = (j + dy + this.C) % this.C
                if (this.isWithinBound(ni, nj)) {
                    let p = this.board[ni][nj].type
                    let reverseDirs = this.dirs.get(p)!
                    console.log(ni + " " + nj + " ", p)
                    if ((!seen[ni][nj]) && 
                        (this.board[ni][nj].type !== 'blank') &&
                        (this.isCompatible(dx, dy, reverseDirs))) {
                            q.push([ni, nj, d + 1, this.board[ni][nj].type])
                            layer.push([ni, nj])
                            seen[ni][nj] = true

                            this.board[ni][nj].isPartPath = true
                    }
                }
            }
        }
        console.log(layer)
        return layer
    }

    public BFS() {
        let seen: boolean[][] = []
        let q: any[][] = []        // <i, j, distance, type>
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
                if (this.board[i][j].type === 'start') {
                    seen[i][j] = true
                    q.push([i, j, 0, 'start'])
                }
            }
        }

        let layer = []
        while (q.length != 0) {
            let front = q.shift()
            let [i, j, d, type] = front!
            let size = q.length
            let dirs = this.dirs.get(type)
            if (type === 'end') return layer
            for (const [dx, dy] of dirs!) {
                let ni = i + dx
                let nj = j + dy
                if (this.isWithinBound(ni, nj)) {
                    let p = this.board[ni][nj].type
                    let reverseDirs = this.dirs.get(p)!
                    if ((!seen[ni][nj]) && 
                        (this.board[ni][nj].type !== 'blank') &&
                        (this.isCompatible(dx, dy, reverseDirs))) {
                            q.push([ni, nj, d + 1, this.board[ni][nj].type])
                            layer.push([ni, nj])
                            seen[ni][nj] = true

                            this.board[ni][nj].isPartPath = true
                    }
                }
            }
        }
        console.log(layer)
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
        
        let old: Cell[][] = [...this.getBoard()]

        // change the type
        let cell = this.board[r][c]
        // console.log(type + newIndex + '')
        // console.log(cell)
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

    public setBoard(newBoard: Cell[][]) {
        this.board = newBoard
    }

    public getBoard() {
        return this.board
    }

    public getLevels() {
        return this.levels
    }

}