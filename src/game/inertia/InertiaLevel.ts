export class InertiaLevel {

    private levelName: string
    private baseLayer: string[][]
    private playerPos: number[]
    private numGems: number

    constructor(levelName: string, baseLayer: string[][], playerPos: number[], numGems: number) {
        this.levelName = levelName
        this.baseLayer = baseLayer
        this.playerPos = playerPos
        this.numGems = numGems
    }

    public setNumGems(numGems: number) { this.numGems = numGems }
    public setBaseLayer(layer: string[][]) { this.baseLayer = layer }
    public setPlayerPos(playerPos: number[]) { this.playerPos = playerPos }

    public getBaseLayer() { return this.baseLayer }
    public getPlayerPos() { return this.playerPos }
    public getLevelName() { return this.levelName }
    public getNumGems() { return this.numGems }

}