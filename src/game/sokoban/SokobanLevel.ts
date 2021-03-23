export class SokobanLevel {

    private levelName: string
    private baseLayer: string[][]
    private boxesPos: number[][]
    private playerPos: number[][]

    constructor(levelName: string, baseLayer: string[][], boxesPos: number[][], playerPos: number[][]) {
        this.levelName = levelName
        this.baseLayer = baseLayer
        this.boxesPos = boxesPos
        this.playerPos = playerPos
    }

    public setBaseLayer(layer: string[][]) { this.baseLayer = layer }
    public setBoxesPos(boxesPos: number[][]) { this.boxesPos = boxesPos }
    public setPlayerPos(playerPos: number[][]) { this.playerPos = playerPos }

    public getBaseLayer() { return this.baseLayer }
    public getBoxesPos() { return this.boxesPos }
    public getPlayerPos() { return this.playerPos }
    public getLevelName() { return this.levelName }

}