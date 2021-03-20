import { stringify } from "querystring"
import { CommandManager } from "../ds/CommandManager"
import { RotateCommand } from "../ds/RotateCommand"
import { Cell } from "./Cell"
import { LevelManager } from "./LevelManager"

export class FloodTubes {
    
    private board: Cell[][]
    private R: number
    private C: number

    private dirs: Map<string, number[][]>

    private levelManager: LevelManager
    private commandManager: CommandManager
    private levels: Map<string, string[][][]>

    private solutionBoard?: Cell[][]

    constructor(row: number, col: number) {

        this.commandManager = new CommandManager()
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

        // this.dirs.set('s0', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('s1', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('s2', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('s3', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('s4', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('s-1', [[1, 0], [-1, 0],[0, -1], [0, 1]])

        // this.dirs.set('f0', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('f1', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('f2', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('f3', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('f4', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        // this.dirs.set('f-1', [[1, 0], [-1, 0],[0, -1], [0, 1]])

        this.dirs.set('blank', [[]])
        this.dirs.set('4ways', [[1, 0], [-1, 0], [0, -1], [0, 1]])
        this.dirs.set('start', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        this.dirs.set('finish', [[1, 0], [-1, 0],[0, -1], [0, 1]])
        
    }

    private isCompatible(dx: number, dy: number, lst: number[][]): boolean {

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
        let rotateCommand: RotateCommand = new RotateCommand(this, old)
        this.commandManager.execute(rotateCommand)

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

    public hasSolution() {
        let seen: boolean[][] = []
        let finishSites = []
        let q: any[][] = []        // <i, j, distance, type>
        let cnt = 0
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
                if (this.board[i][j].type === 'start') {
                    seen[i][j] = true
                    q.push([i, j, 0, 'start'])
                }

                if (this.board[i][j].type === 'finish') {
                    finishSites.push([i, j])
                    cnt ++
                }
            }
        }

        let layer = []
        while (q.length != 0) {
            let front = q.shift()
            let [i, j, d, type] = front!
            if (type === 'finish') cnt -= 1
            let size = q.length
            let dirs = this.dirs.get(type)
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
        return cnt === 0
    }

    public hasSolutionWrapping() {
        let seen: boolean[][] = []
        let finishSites = []
        let q: any[][] = []        // <i, j, distance, type>
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
                if (this.board[i][j].type === 'start') {
                    seen[i][j] = true
                    q.push([i, j, 0, 'start'])
                }

                if (this.board[i][j].type === 'finish') {
                    finishSites.push([i, j])
                }
            }
        }

        let layer = []
        while (q.length != 0) {
            let front = q.shift()
            let [i, j, d, type] = front!
            let size = q.length
            let dirs = this.dirs.get(type)
            for (const [dx, dy] of dirs!) {
                let ni = (i + dx + this.R) % this.R
                let nj = (j + dy + this.C) % this.C
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

        return this.win(finishSites, seen)
    }

    public win(finishSites: number[][], seen: boolean[][]): boolean {
        if (finishSites.length === 0) return false
        for (let i = 0; i < finishSites.length; i ++) {
            let r = finishSites[i][0]
            let c = finishSites[i][1]
            if (seen[r][c] === false)
                return false
        }
        return true
    }

    public generateBoard() {

    }

    public solveBoard(category: string) {
        console.log('SOLVING')
        let seen: boolean[][] = []
        let start = []
        for (let i = 0; i < this.R; i ++) {
            seen.push([])
            for (let j = 0; j < this.C; j ++) {
                seen[i].push(false)
                if (this.board[i][j].type === 'start') {
                    seen[i][j] = true
                    start.push([i, j])
                }
                
            }
        }

        if (category === 'classic'){
            for (const [i, j] of start) {
                this.backtrack(i, j, seen)
            }
        } else{
            console.log('wrapping is called')
            for (const [i, j] of start) {
                this.backtrackWrapping(i, j, seen)
            } 
        }

        console.log('DONE SOLVING')

    }

    public backtrack(i: number, j: number, seen: boolean[][]) {
        console.log(i + ' ' + j)

        // check if the configuration can return
        if (this.hasSolution()) {
            console.log('a solution exists')
            let grid: Cell[][] = []
            for (let r = 0; r < this.R; r ++) {
                grid[r] = []
                for (let c = 0; c < this.C; c ++) {
                    let val = this.board[r][c].deepCopy()
                    grid[r].push(val)
                }
            }
            this.solutionBoard = grid
            // this.setBoard(grid)
            console.log(grid)
            return true
        }

        let cell = this.board[i][j]
        let curType = cell.type
        let type = curType.charAt(0)
        let curIndex: number = +curType.charAt(1)
       // console.log(cell)


        // try all rotation
        if (curType === 'start') {
            seen[i][j] = true
            for (const [dx, dy] of [[1, 0], [-1, 0],[0, -1], [0, 1]]) {
                let ni = i + dx
                let nj = j + dy
                if (this.isWithinBound(ni, nj) &&
                    (this.board[ni][nj].type !== 'blank') &&
                    (!seen[ni][nj]) &&
                    (this.board[ni][nj].type !== 'finish')) {
                        if (this.backtrack(ni, nj, seen))
                            return true

                }
            }
            seen[i][j] = false
        }
        
        else {
            seen[i][j] = true
            let end = 0
            if (type === 'i') end = 2
            if (type === 't' || type == 'd') end = 4
            for (let k = 0; k < end; k ++) {
                let newIndex: number = -1
                if (type === 'i') newIndex = (curIndex + k) % end
                if (type === 't' || type === 'd') newIndex = (curIndex + k) % end
                let temp = type + newIndex
                this.board[i][j].type = temp
                for (const [dx, dy] of [[1, 0], [-1, 0],[0, -1], [0, 1]]) {
                    let ni = i + dx
                    let nj = j + dy
                    if (this.isWithinBound(ni, nj) &&
                        (this.board[ni][nj].type !== 'blank') &&
                        (!seen[ni][nj]) &&
                        (this.board[ni][nj].type !== 'finish')) {
                            if (this.backtrack(ni, nj, seen)) {
                                return true
                            }
                    }
                }
            }
            seen[i][j] = false
        }
        return false
    }

    public backtrackWrapping(i: number, j: number, seen: boolean[][]) {

        // check if the configuration can return
        if (this.hasSolutionWrapping()) {
            console.log('a solution exists')
            let grid: Cell[][] = []
            for (let r = 0; r < this.R; r ++) {
                grid[r] = []
                for (let c = 0; c < this.C; c ++) {
                    let val = this.board[r][c].deepCopy()
                    grid[r].push(val)
                }
            }
            this.solutionBoard = grid
            console.log(grid)
            return true
        }
        let cell = this.board[i][j]
        let curType = cell.type
        let type = curType.charAt(0)
        let curIndex: number = +curType.charAt(1)

        // try all dirs
        if (curType === 'start') {
            for (const [dx, dy] of [[1, 0], [-1, 0],[0, -1], [0, 1]]) {
                let ni = (i + dx + this.R) % this.R
                let nj = (j + dy + this.C) % this.C
                if (this.isWithinBound(ni, nj) &&
                    (this.board[ni][nj].type !== 'blank') &&
                    (!seen[ni][nj])) {
                        seen[ni][nj] = true
                        if (this.backtrackWrapping(ni, nj, seen))
                            return true
                        seen[ni][nj] = false
                }
            }
        }
        
        else if (curType === 'finish') { return }
        else {
            for (let k = 0; k < 5; k ++) {
                let newIndex: number = -1
                if (type === 'i') newIndex = (curIndex + k) % 2
                if (type === 't' || type === 'd') newIndex = (curIndex + k) % 4
                this.board[i][j].type = type + newIndex + ''
                for (const [dx, dy] of [[1, 0], [-1, 0],[0, -1], [0, 1]]) {
                    let ni = (i + dx + this.R) % this.R
                    let nj = (j + dy + this.C) % this.C
                    if (this.isWithinBound(ni, nj) &&
                        (this.board[ni][nj].type !== 'blank') &&
                        (!seen[ni][nj])) {
                            seen[ni][nj] = true
                            if (this.backtrackWrapping(ni, nj, seen)) {
                                return true
                            }
                            seen[ni][nj] = false
                    }
                }
            }
        }
        return false
    }

    public minBFS() {
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
        // console.log(`starting position: ${q[0]}`)

        while (q.length != 0) {
            console.log(`processing: ${q[0]}`)
            let front = q.shift()
            let [i, j, d, type] = front!
            // let dirs = this.dirs.get(type)
            if (type === 'finish') {
                console.log(`rotation needed is: ${d}`)
                break
            }

            let newIndex = -1
            let t = type.charAt(0)
            let curIndex: number = +type.charAt(1)
            let rotations = 1
            if (t === 'i') rotations = 2
            if (t === 't' || t === 'd') rotations = 4
            if (type === 'start' || type === 'finish') rotations = 1
            if (type === '4ways') rotations = 1
            for (let i = 0; i < rotations; i ++) {
                newIndex = (curIndex + i) % rotations
                let newType: string = ''
                var dirs: number[][]
                if (t === 'i' || t === 't' || t === 'd') {
                    dirs = this.dirs.get(t + newIndex + '')!
                    newType = t + newIndex + ''
                }
                else {
                    dirs = this.dirs.get(type)!
                    newType = type
                }
                for (const [dx, dy] of dirs!) {
                    let ni = i + dx
                    let nj = j + dy
                    if (this.isWithinBound(ni, nj) && (!seen[ni][nj]) && (this.board[ni][nj].type !== 'blank')) {
                        let p = this.board[ni][nj].type
                        let reverseDirs = this.dirs.get(p)!
                        if (this.isCompatible(dx, dy, reverseDirs)) {
                            console.log('a')
                            q.unshift([ni, nj, d, this.board[ni][nj].type])
                            seen[ni][nj] = true
                        } else {
                            console.log('b')
                            q.push([ni, nj, d + 1, this.board[ni][nj].type])
                            seen[ni][nj] = true
                        }
                    }
                }
            }
        }
        console.log('done solving')
        // return layer
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

    public getCommandManager(): CommandManager {
        return this.commandManager
    }

    public getSolutionBoard() {
        return this.solutionBoard
    }

}