import { dirxml } from "console"
import { stringify } from "querystring"
import { HighlightSpanKind } from "typescript"
import { CommandManager } from "../../ds/CommandManager"
import { RotateCommand } from "../../ds/RotateCommand"
import { SokobanMoveCommand } from "../../ds/SokobanMoveCommand"
import { Cell } from "../Cell"
import { LevelManager } from "../LevelManager"
import { Player } from "./player"
import { SokobanCell } from "./SokobanCell"
import { SokobanLevel } from "./SokobanLevel"
import { SokobanLevelManager } from "./SokobanLevelManager"

export class Sokoban {
    
    private board: SokobanCell[][]
    private R: number
    private C: number

    private levelManager: SokobanLevelManager
    private commandManager: CommandManager
    private levels: Map<string, SokobanLevel>

    private dirs: Map<string, number[]>
    private player: Player

    private numberOfBoxes: number
    // private playerCoord: [number, number]


    constructor(row: number, col: number) {
        this.numberOfBoxes = -1
        this.commandManager = new CommandManager()
        this.levelManager = new SokobanLevelManager()
        this.levels = this.levelManager.getLevels()

        this.dirs = new Map()
        this.dirs.set("w", [-1, 0])
        this.dirs.set("s", [1, 0])
        this.dirs.set("a", [0, -1])
        this.dirs.set("d", [0, 1])

        // init board
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let node = new SokobanCell(i, j, 'g', false, false)
                this.board[i].push(node)
            }
        }
        this.player = new Player(0, 0)

        let command: SokobanMoveCommand = new SokobanMoveCommand(this, this.getBoard(), this.player)
        this.commandManager.execute(command)
    }

    public loadLevel(requestedLevel: string) {
        
        let level: SokobanLevel = this.levelManager.getLevel(requestedLevel)!
        if (level === undefined || level === null) return

        this.levelManager.setCurLevel(requestedLevel)
        let base = level.getBaseLayer()
        let boxesPos = level.getBoxesPos()
        let playerPos = level.getPlayerPos()

        this.numberOfBoxes = level.getNumBoxes()
        
        for (let i = 0; i < this.board.length; i ++) {
            for (let j = 0; j < this.board[i].length; j ++) {
                this.board[i][j] = new SokobanCell(i, j, base[i][j], false, false)
            }
        }

        for (let i = 0; i < boxesPos.length; i ++) {
            let r = boxesPos[i][0]
            let c = boxesPos[i][1]
            this.board[r][c].setIsBox(true)
        }

        let playerX = playerPos[0][0]
        let playerY = playerPos[0][1]
        this.player.setX(playerX)
        this.player.setY(playerY)
        this.board[playerX][playerY].setIsPlayer(true)

        this.commandManager = new CommandManager()
    }

    public canMove(dir: string) {


        let playerX = this.player.getX()
        let playerY = this.player.getY()
        
        let tmp = this.dirs.get(dir)!
        if (tmp === undefined || tmp === null) return [false, false]

        let dx = tmp[0]
        let dy = tmp[1]

        let newX = playerX + dx
        let newY = playerY + dy

        if (this.board[newX][newY].getIsBox()) {
            let nr = newX + dx
            let nc = newY + dy
            if (this.board[nr][nc].getIsBox()) return [false, false]
            else if (this.board[nr][nc].type === 'w') return [false, false]
            else if (this.board[nr][nc].type === 'e') return [true, true]
            else if (this.board[nr][nc].type === 'g') return [true, true] 
        }
        else if (this.board[newX][newY].type === 'w') return [false, false]
        else if (this.board[newX][newY].type === 'e') return [true, false]
        else if (this.board[newX][newY].type === 'g') return [true, false]
        return [false, false]
    }

    public movePlayer(dir: string) {
        let tmp = this.dirs.get(dir)!
        if (tmp === undefined || tmp === null) return false
        let dx = tmp[0]
        let dy = tmp[1]

        // move the player
        let curPlayerX = this.player.getX()
        let curPlayerY = this.player.getY()
        let newPlayerX = curPlayerX + dx
        let newPlayerY = curPlayerY + dy
        this.board[curPlayerX][curPlayerY].setIsPlayer(false)
        this.board[newPlayerX][newPlayerY].setIsPlayer(true)
        this.player.setX(newPlayerX)
        this.player.setY(newPlayerY)
    }



    public moveBox(dir: string) {
        let tmp = this.dirs.get(dir)!
        if (tmp === undefined || tmp === null) return false
        let dx = tmp[0]
        let dy = tmp[1]

        // move the player
        let curPlayerX = this.player.getX()
        let curPlayerY = this.player.getY()
        let newPlayerX = curPlayerX + dx
        let newPlayerY = curPlayerY + dy
        this.board[curPlayerX][curPlayerY].setIsPlayer(false)
        this.board[newPlayerX][newPlayerY].setIsPlayer(true)
        this.player.setX(newPlayerX)
        this.player.setY(newPlayerY)

        // move the box
        let newBoxX = curPlayerX + 2 * dx
        let newBoxY = curPlayerY + 2 * dy
        this.board[newPlayerX][newPlayerY].setIsBox(false)
        this.board[newBoxX][newBoxY].setIsBox(true)
    }

    public hasWon(): boolean {
        var cnt = 0
        for (let i = 0; i < this.board.length; i ++) {
            for (let j = 0; j < this.board[i].length; j ++) {
                let cell = this.board[i][j]
                let isBox = cell.getIsBox()
                let type = cell.getType()
                if (type === 'e' && isBox === true) {
                    cnt += 1
                }
            }
        }
        return cnt === this.numberOfBoxes
    }

    public undo() {
        this.commandManager.undo()

    }

    public redo() {
        this.commandManager.redo()
    }

    
    public isWithinBound(i: number, j: number) {
        if (i >= 0 && i < this.R && j >= 0 && j < this.C)
            return true
        return false
    }

    public setBoard(newBoard: SokobanCell[][]) {
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

    public getLevelManger() {
        return this.levelManager
    }

    public getPlayer() {
        return this.player
    }

    public setPlayer(player: Player) {
        this.player = player
    }

}