import { light } from "@material-ui/core/styles/createPalette"
import { CommandManager } from "../../ds/CommandManager"
import { InertiaMoveCommand } from "../../ds/InertiaMoveCommand"
import { NumberArraySet } from "../../ds/NumberArraySet"
import { LightUpCell } from "./LightUpCell"
import { LightUpLevel } from "./LightUpLevel"
import { LightUpLevelManager } from "./LightUpLevelManager"

export enum Toggle {
    ON,
    OFF,
    NOTAPPLICABLE
}

export class LightUp {

    private board: LightUpCell[][]
    private R: number
    private C: number

    private commandManager: CommandManager

    private dirs: Map<string, number[]>
    private numberOfBoxes: number
    private levelManager: LightUpLevelManager

    private lightbulbs: NumberArraySet
    private rowsLimit: number[]
    private colsLimit: number[]
    private lightWalls: number[][]

    constructor(row: number, col: number) {

        this.numberOfBoxes = -1
        this.commandManager = new CommandManager()
        this.levelManager = new LightUpLevelManager()

        this.dirs = new Map()
        this.dirs.set("w", [-1, 0])
        this.dirs.set("s", [1, 0])
        this.dirs.set("a", [0, -1])
        this.dirs.set("d", [0, 1])

        let startLevel = this.levelManager.getLevel('1')!
        let layer = startLevel.getBaseLayer()

        // init board
        this.lightWalls = []
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i++) {
            this.board[i] = []
            for (let j = 0; j < col; j++) {
                let isEmpty = layer[i][j] === 'e'
                let isBlock = layer[i][j] !== 'e'
                let lightsNum = -1
                if (layer[i][j] !== 'e') lightsNum = +layer[i][j]
                let node = new LightUpCell(i, j, layer[i][j], false, isBlock, false, isEmpty, lightsNum, false)
                if (layer[i][j] !== 'b' && layer[i][j] !== 'e') {
                    this.lightWalls.push([i, j])
                }
                this.board[i].push(node)
            }
        }


        this.lightbulbs = new NumberArraySet()
        this.rowsLimit = []
        this.colsLimit = []
        for (let i = 0; i < this.R; i++) { this.rowsLimit.push(0) }
        for (let i = 0; i < this.C; i++) { this.colsLimit.push(0) }

        // let command = new InertiaMoveCommand(this, this.getBoard(), this.player)
        // this.commandManager.execute(command)
    }

    public move(x: number, y: number): [number[][], Toggle, number[][]] {
        // the cell is blocking or crossed-out
        if (this.board[x][y].getIsBlock() || this.board[x][y].getIsCross())
            return [[], Toggle.NOTAPPLICABLE, []]

        var toggle = null
        let cell = this.board[x][y]
        if (cell.getIsLight())
            toggle = Toggle.OFF
        else
            toggle = Toggle.ON

        var toggleCells: number[][] = []
        if (toggle === Toggle.ON) {
            this.lightbulbs.add([x, y])
            this.rowsLimit[x] += 1
            this.colsLimit[y] += 1
            this.board[x][y].setIsLight(!this.board[x][y].getIsLight())
            toggleCells = this.findAllEnlightenCells(x, y)
            // let allCells = this.getLightenCells()
            return [toggleCells, toggle!!, []]
        } else {
            this.lightbulbs.remove([x, y])
            this.rowsLimit[x] -= 1
            this.colsLimit[y] -= 1
            toggleCells = this.findAllEnlightenCells(x, y)
            this.board[x][y].setIsLight(!this.board[x][y].getIsLight())
            let allCells = this.getLightenCells()
            return [toggleCells, toggle!!, allCells]
        }
    }

    private countEnlightenCells() {
        let set = new NumberArraySet()
        for (const [x, y] of this.lightbulbs) {
            for (let i = x; i >= 0; i--) {
                let cell = this.board[i][y]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                else
                    set.add([i, y])
            }

            for (let i = x; i < this.R; i++) {
                let cell = this.board[i][y]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                else
                    set.add([i, y])
            }

            for (let i = y; i < this.C; i++) {
                let cell = this.board[x][i]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                else
                    set.add([x, i])
            }


            for (let i = y; i >= 0; i--) {
                let cell = this.board[x][i]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                else
                    set.add([x, i])
            }
        }
        return set
    }


    private lightConflict() {
        for (const [x, y] of this.lightbulbs) {
            for (let i = x - 1; i >= 0; i--) {
                let cell = this.board[i][y]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                if (cell.getIsLight()) {
                    return true
                }
            }

            for (let i = x + 1; i < this.R; i++) {
                let cell = this.board[i][y]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                if (cell.getIsLight()) {
                    return true
                }

            }

            for (let i = y + 1; i < this.C; i++) {
                let cell = this.board[x][i]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                if (cell.getIsLight()) {
                    return true
                }
            }


            for (let i = y - 1; i >= 0; i--) {
                let cell = this.board[x][i]
                if (cell.getIsCross() || cell.getIsBlock())
                    break
                if (cell.getIsLight()) {
                    return true
                }
            }
        }
        return false
    }

    public hasWon(): boolean {
        // check if all cells are lit
        let lighten = this.countEnlightenCells()
        if (lighten.length !== this.levelManager.getLevelRequirement()) {
            return false
        }

        // light checks
        for (const [i, j] of this.lightWalls) {
            let cnt = 0
            for (const [ni, nj] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
                if (this.isWithinBound(ni, nj) && this.board[ni][nj].getIsLight()) {
                    cnt += 1
                }
            }
            let limit = this.board[i][j].getLightsNum()
            if (limit !== -1 && cnt != limit) {
                return false
            }
        }

        // no two lights on the same row or col
        if (this.lightConflict()) return false

        return true
    }

    public undo() {
        this.commandManager.undo()
    }

    public redo() {
        this.commandManager.redo()
    }

    public reset() {
        let curLevel = this.levelManager.getCurLevel()
        this.loadLevel(curLevel)
    }

    public loadLevel(requestedLevel: string) {

        let level: LightUpLevel = this.levelManager.getLevel(requestedLevel)!
        if (level === undefined || level === null) return

        this.levelManager.setCurLevel(requestedLevel)
        let layer = level.getBaseLayer()
        let row = this.R
        let col = this.C
        for (let i = 0; i < row; i++) {
            this.board[i] = []
            for (let j = 0; j < col; j++) {
                let isEmpty = layer[i][j] === 'e'
                let isBlock = layer[i][j] !== 'e'
                let lightsNum = -1
                if (layer[i][j] !== 'e') lightsNum = +layer[i][j]
                let node = new LightUpCell(i, j, layer[i][j], false, isBlock, false, isEmpty, lightsNum, false)
                this.board[i].push(node)
            }
        }
        this.commandManager = new CommandManager()
        // let command = new InertiaMoveCommand(this, this.getBoard(), this.player)
        // this.commandManager.execute(command)
    }

    private getLightenCells(): number[][] {
        // let lightBulbs = []
        // for (let i = 0; i < this.R; i ++) {
        //     for (let j = 0; j < this.C; j ++) {
        //         if (this.board[i][j].getIsLight()) {
        //             lightBulbs.push([i, j])
        //         }
        //     }
        // }
        let res: number[][] = []
        for (const [i, j] of this.lightbulbs) {
            res = [...res, ...this.findAllEnlightenCells(i, j)]
        }
        return res
    }

    private findAllEnlightenCells(x: number, y: number) {
        let enlightenCells = []
        for (let i = x; i >= 0; i--) {
            let cell = this.board[i][y]
            if (cell.getIsCross() || cell.getIsBlock())
                break
            else
                enlightenCells.push([i, y])
        }

        for (let i = x; i < this.R; i++) {
            let cell = this.board[i][y]
            if (cell.getIsCross() || cell.getIsBlock())
                break
            else
                enlightenCells.push([i, y])
        }

        for (let i = y; i < this.C; i++) {
            let cell = this.board[x][i]
            if (cell.getIsCross() || cell.getIsBlock())
                break
            else
                enlightenCells.push([x, i])
        }

        for (let i = y; i >= 0; i--) {
            let cell = this.board[x][i]
            if (cell.getIsCross() || cell.getIsBlock())
                break
            else
                enlightenCells.push([x, i])
        }
        return enlightenCells
    }

    public isWithinBound(i: number, j: number) {
        if (i >= 0 && i < this.R && j >= 0 && j < this.C)
            return true
        return false
    }

    public setBoard(newBoard: LightUpCell[][]) {
        this.board = newBoard
    }

    public getBoard() {
        return this.board
    }

    public getLevels() {
        return this.levelManager.getLevels()
    }

    public getCommandManager(): CommandManager {
        return this.commandManager
    }

    public getLevelManger() {

    }

    public toString = (): string => {
        return this.getBoard().toString()
    }

}