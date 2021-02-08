export class Cell {
    private i: number
    private j: number
    public type: string

    public isStart: boolean
    public isFinish: boolean
    public isPartPath: boolean

    public imgSrc: string


    constructor(i: number, j: number, type: string, isStart: boolean, isFinish: boolean, isPartPath: boolean) {
        this.i = i
        this.j = j
        this.type = type 
        this.isFinish = isFinish
        this.isStart = isStart
        this.isPartPath = isPartPath

        this.imgSrc = '/src/i0.png'

    }
}