export class LightUpLevel {

    private levelName: string
    private baseLayer: string[][]
    private minLights: number

    constructor(levelName: string, baseLayer: string[][], minLights: number) {
        this.levelName = levelName
        this.baseLayer = baseLayer
        this.minLights = minLights
    }

    public setMinLights(minLights: number) { this.minLights = minLights }
    public setBaseLayer(layer: string[][]) { this.baseLayer = layer }

    public getBaseLayer() { return this.baseLayer }
    public getLevelName() { return this.levelName }
    public getMinLights() { return this.minLights }

}