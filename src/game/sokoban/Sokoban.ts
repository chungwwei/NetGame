import { dirxml } from "console"
import { stringify } from "querystring"
import { CommandManager } from "../../ds/CommandManager"
import { RotateCommand } from "../../ds/RotateCommand"
import { SokobanMoveCommand } from "../../ds/SokobanMoveCommand"
import { Cell } from "../Cell"
import { LevelManager } from "../LevelManager"
import { Player } from "./player"
import { SokobanCell } from "./SokobanCell"

export class Sokoban {
    
    private board: SokobanCell[][]
    private R: number
    private C: number

    private levelManager: LevelManager
    private commandManager: CommandManager
    private levels: Map<string, string[][][]>

    private dirs: Map<string, number[]>
    private player: Player


    // private playerCoord: [number, number]


    constructor(row: number, col: number) {

        this.commandManager = new CommandManager()
        this.levelManager = new LevelManager()
        this.levels = this.levelManager.levels

        this.dirs = new Map()
        this.dirs.set("w", [-1, 0])
        this.dirs.set("s", [1, 0])
        this.dirs.set("a", [0, -1])
        this.dirs.set("d", [0, 1])

        let temp = 
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'e', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'e', 'e', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'e', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'e', 'e', 'g', 'w', 'w', 'w', 'w', 'w', 'w']
        ]

        // init board
        this.board = []
        this.R = row
        this.C = col
        for (let i = 0; i < row; i ++) {
            this.board[i] = []
            for (let j = 0; j < col; j ++) {
                let node = new SokobanCell(i, j, temp[i][j], false, false)
                this.board[i].push(node)
            }
        }

        this.player = new Player(5, 5)
        this.board[5][5].setIsPlayer(true)
        this.board[6][5].setIsBox(true)
        this.board[4][4].setIsBox(true)


        let command: SokobanMoveCommand = new SokobanMoveCommand(this, this.getBoard(), this.player)
        this.commandManager.execute(command)
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

    public getPlayer() {
        return this.player
    }

    public setPlayer(player: Player) {
        this.player = player
    }

}