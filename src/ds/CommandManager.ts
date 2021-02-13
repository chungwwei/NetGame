import { ICommand } from "./ICommand";

export class CommandManager {

    public undoStk: ICommand[] = []
    public redoStk: ICommand[] = []
    
    public execute(command: ICommand) {
        this.undoStk.push(command)
        this.redoStk = []
    }

    public executeCommands(commands :ICommand[]) {

    }

    public undo() {
        if (this.undoStk.length > 0) {
            let last = this.undoStk.pop()!
            last.undo()
            this.redoStk.push(last)
        }

    }

    public redo() {
        if (this.redoStk.length > 0) {
            let last = this.redoStk.pop()!
            last.redo()
            this.undoStk.push(last)
        }
    }
}