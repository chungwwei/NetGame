import { runInThisContext } from "vm";
import { Cell } from "../game/Cell";
import { Inertia } from "../game/inertia/Inertia";
import { InertiaCell } from "../game/inertia/InertiaCell";
import { Player } from "../game/sokoban/player";
import { ICommand } from "./ICommand";

export class InertiaMoveCommand implements ICommand {

    private game: Inertia
    private curGrid: InertiaCell[][]
    private playerX: number
    private playerY: number
    private player: Player


    constructor(game: Inertia, grid: InertiaCell[][], player: Player) {
        this.game = game
        this.curGrid = []

        for (let i = 0; i < grid.length; i ++) {
            this.curGrid[i] = []
            for (let j = 0; j < grid[i].length; j ++) {
                this.curGrid[i].push(grid[i][j].deepCopy())
            }
        }

        this.playerX = player.getX()
        this.playerY = player.getY()
        this.player = player
    }

    public execute() {
        console.log('executing')
        let board = this.game.getBoard()
        for (let i = 0; i < board.length; i ++) {
            for (let j = 0; j < board[i].length; j ++) {
                let cell = board[i][j]
                cell.setI(this.curGrid[i][j].getI())
                cell.setJ(this.curGrid[i][j].getJ())
                cell.setType(this.curGrid[i][j].getType())
                cell.setIsBomb(this.curGrid[i][j].getIsBomb())
                cell.setIsGem(this.curGrid[i][j].getIsGem())
                cell.setIsBrokenCircle(this.curGrid[i][j].getIsBrokenCircle())
                cell.setIsGround(this.curGrid[i][j].getIsGround())
                cell.setIsWall(this.curGrid[i][j].getIsWall())
                cell.setIsPlayer(this.curGrid[i][j].getIsPlayer())
            }
        }

        // this.game.setBoard(this.curGrid)
        this.player.setX(this.playerX)
        this.player.setY(this.playerY)
        // this.game.setPlayer(new Player(this.playerX, this.playerY))
    }

    public undo() {
        let stk = this.game.getCommandManager().undoStk
        let last = stk.length - 1
        if (last >= 0) {
            console.log(stk[last])
            stk[last].execute()
        }
    }

    public redo() {
        // this.game.setBoard(this.curGrid)
        let board = this.game.getBoard()
        for (let i = 0; i < board.length; i ++) {
            for (let j = 0; j < board[i].length; j ++) {
                let cell = board[i][j]
                cell.setI(this.curGrid[i][j].getI())
                cell.setJ(this.curGrid[i][j].getJ())
                cell.setType(this.curGrid[i][j].getType())
                cell.setIsBomb(this.curGrid[i][j].getIsBomb())
                cell.setIsGem(this.curGrid[i][j].getIsGem())
                cell.setIsBrokenCircle(this.curGrid[i][j].getIsBrokenCircle())
                cell.setIsGround(this.curGrid[i][j].getIsGround())
                cell.setIsWall(this.curGrid[i][j].getIsWall())
                cell.setIsPlayer(this.curGrid[i][j].getIsPlayer())
            }
        }
        // this.game.setPlayer(new Player(this.playerX, this.playerY))
        this.player.setX(this.playerX)
        this.player.setY(this.playerY)
    }

    public getStateBoard() {
        return this.curGrid
    }

}