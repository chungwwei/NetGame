export class Player {
    private x: number
    private y: number

    constructor(initX: number, initY: number) {
        this.x = initX
        this.y = initY
    }

    public setX(x: number) {
        this.x = x
    }

    public setY(y: number) {
        this.y = y
    }

    public getX() { return this.x }

    public getY() { return this. y }
}