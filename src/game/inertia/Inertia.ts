import { CommandManager } from "../../ds/CommandManager"
import { InertiaMoveCommand } from "../../ds/InertiaMoveCommand"
import { Cell } from "../Cell"
import { LevelManager } from "../LevelManager"
import { Player } from "../sokoban/player"
import { InertiaCell } from "./InertiaCell"
import { InertiaLevel } from "./InertiaLevel"
import { InertiaLevelManager } from "./InertiaLevelManager"

export enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UPLEFT,
    UPRIGHT,
    DOWNLEFT,
    DOWNRIGHT,
    SAME,
}

export class Inertia {
    
    private board: InertiaCell[][]
    private R: number
    private C: number

    private commandManager: CommandManager

    private dirs: Map<string, number[]>
    private player: Player
    private numberOfBoxes: number
    private levelManager: InertiaLevelManager


    constructor(row: number, col: number) {
        this.numberOfBoxes = -1
        this.commandManager = new CommandManager()
        this.levelManager = new InertiaLevelManager()

        this.dirs = new Map()
        this.dirs.set("w", [-1, 0])
        this.dirs.set("s", [1, 0])
        this.dirs.set("a", [0, -1])
        this.dirs.set("d", [0, 1])

        let startLevel = this.levelManager.getLevel('1')!
        let layer = startLevel.getBaseLayer()
        let playerX = startLevel.getPlayerPos()[0]
        let playerY = startLevel.getPlayerPos()[1]
        // init board
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let isWall = layer[i][j] === 'w'
                let isBrokeCircle = layer[i][j] === 'c'
                let isGem = layer[i][j] === 'j'
                let isBomb = layer[i][j] === 'b'
                let isGround = layer[i][j] === 'g'
                let isPlayer = (i === playerX && j === playerY)
                let node = new InertiaCell(i, j, layer[i][j], isPlayer, isWall, isGem, isBrokeCircle, isBomb, isGround)
                this.board[i].push(node)
            }
        }
        this.player = new Player(playerX, playerY)
        let command = new InertiaMoveCommand(this, this.getBoard(), this.player)
        this.commandManager.execute(command)
    }

    public canMove(i: number, j: number): [boolean, Directions] {
        i += 1
        j += 1
        let playerX: number = this.player.getX() + 1
        let playerY: number = this.player.getY() + 1

        let dx = Math.abs(playerX - i)
        let dy = Math.abs(playerY - j)
        if (i == playerX && j == playerY) return [false, Directions.SAME]
        
        if (i == playerX) {
            if (j < playerY) return [true, Directions.LEFT]
            else return [true, Directions.RIGHT]
        } else if (j == playerY) {
            if (i < playerX) return [true, Directions.UP]
            else return [true, Directions.DOWN]
        } else {
            if (dy !== dx) return [false, Directions.SAME]
            if (i < playerX && j < playerY) return [true, Directions.UPLEFT]
            if (i < playerX && j > playerY) return [true, Directions.UPRIGHT]
            if (i > playerX && j < playerY) return [true, Directions.DOWNLEFT]
            if (i > playerX && j > playerY) return [true, Directions.DOWNRIGHT]
        }

        return [false, Directions.SAME]
    }


    public movePlayer(x: number, y: number) {
        console.log('command: move player')

        let temp = this.canMove(x, y)
        let [movable, dir] = temp
        if (!movable) return

        let playerX: number = this.player.getX()
        let playerY: number = this.player.getY()
        let i: number = playerX
        let j: number = playerY
        let dx = 0
        let dy = 0
        if (dir === Directions.UP) {
            dx = -1
        } else if (dir === Directions.DOWN) {
            dx = 1
        } else if(dir === Directions.LEFT) {
            dy = -1
        } else if(dir === Directions.RIGHT) {
            dy = 1
        } else if (dir === Directions.UPLEFT) {
            dx = -1
            dy = -1
        } else if (dir === Directions.UPRIGHT) {
            dx = -1
            dy = 1
        } else if (dir === Directions.DOWNLEFT) {
            dx = 1
            dy = -1
        } else if (dir === Directions.DOWNRIGHT) {
            dx = 1
            dy = 1
        }

        
        while (this.isWithinBound(i + dx, j + dy)) {
            i += dx 
            j += dy
            if (this.board[i][j].getIsGem()) {
                this.board[i][j].setIsGem(false)
            }
            if (this.board[i][j].getIsBrokenCircle()) break
            if (this.board[i][j].getIsBomb()) break
            if (this.board[i][j].getIsWall()) {
                i -= dx
                j -= dy
                break
            }
        }

        this.board[playerX][playerY].setIsPlayer(false)
        this.board[i][j].setIsPlayer(true)
        this.player.setX(i)
        this.player.setY(j)

        let command = new InertiaMoveCommand(this, this.getBoard(), this.player)
        this.commandManager.execute(command)
        console.log(this.commandManager.undoStk)
    }

    public hasWon(): boolean {
        return false
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
        
        let level: InertiaLevel = this.levelManager.getLevel(requestedLevel)!
        if (level === undefined || level === null) return

        this.levelManager.setCurLevel(requestedLevel)
        let layer = level.getBaseLayer()
        let row = this.R
        let col = this.C
        let playerX = level.getPlayerPos()[0]
        let playerY = level.getPlayerPos()[1]
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let isWall = layer[i][j] === 'w'
                let isBrokeCircle = layer[i][j] === 'c'
                let isGem = layer[i][j] === 'j'
                let isBomb = layer[i][j] === 'b'
                let isGround = layer[i][j] === 'g'
                let isPlayer = (i === playerX && j === playerY)
                let node = new InertiaCell(i, j, layer[i][j], isPlayer, isWall, isGem, isBrokeCircle, isBomb, isGround)
                this.board[i].push(node)
            }
        }
        this.commandManager = new CommandManager()
        this.player = new Player(playerX, playerY)
        let command = new InertiaMoveCommand(this, this.getBoard(), this.player)
        this.commandManager.execute(command)
    }
    
    public isWithinBound(i: number, j: number) {
        if (i >= 0 && i < this.R && j >= 0 && j < this.C)
            return true
        return false
    }

    public setBoard(newBoard: InertiaCell[][]) {
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

    public getPlayer() {
        return this.player
    }

    public setPlayer(player: Player) {
        this.player = player
    }

    public toString = () : string => {
        return this.getBoard().toString()
    }

}