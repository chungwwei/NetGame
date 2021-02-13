import { runInThisContext } from "vm";
import { Cell } from "../game/Cell";
import { FloodTubes } from "../game/FloodTube";
import { ICommand } from "./ICommand";

export class RotateCommand implements ICommand {

    private game: FloodTubes
    public curGrid: Cell[][]

    constructor(game: FloodTubes, grid: Cell[][]) {
        this.game = game
        this.curGrid = []

        for (let i = 0; i < grid.length; i ++) {
            this.curGrid[i] = []
            for (let j = 0; j < grid[i].length; j ++) {
                this.curGrid[i].push(grid[i][j].deepCopy())
            }
        }
    }
    

    public execute() {
        
    }

    public undo() {
        this.game.setBoard(this.curGrid)
    }

    public redo() {
        this.game.setBoard(this.curGrid)
    }

}