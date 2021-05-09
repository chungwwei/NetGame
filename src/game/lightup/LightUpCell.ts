export class LightUpCell {
    private i: number
    private j: number
    public type: string

    private isLight: boolean
    private isBlock: boolean
    private isCross: boolean
    private isEmpty: boolean
    private lightsNum: number
    private isLightenUp: boolean

    constructor(i: number, j: number, type: string, isLight: boolean, isBlock: boolean, isCross: boolean, isEmpty: boolean, lightsNum: number, isLightenUp: boolean) {
        this.i = i
        this.j = j
        this.type = type 
        this.isLight = isLight
        this.isBlock = isBlock
        this.isCross = false
        this.isEmpty = isEmpty
        this.lightsNum = lightsNum
        this.isLightenUp = isLightenUp
    }

    public deepCopy() {
        return new LightUpCell(
            this.i,
            this.j,
            this.type,
            this.isLight,
            this.isBlock,
            this.isCross,
            this.isEmpty,
            this.lightsNum,
            this.isLightenUp
        )
    }

    public setIsLight(bool: boolean) { this.isLight = bool }
    public setIsBlock(bool: boolean) { this.isBlock = bool }
    public setIsCross(bool: boolean) { this.isCross = bool }
    public setLightsNum(lightsNum: number) { this.lightsNum = lightsNum}
    public setIsEmpty(bool: boolean) { this.isEmpty = bool }
    public setI(i: number) { this.i = i }
    public setJ(j: number) { this.j = j }
    public setType(type: string) { this.type = type }
    public setIsLightenUp(bool: boolean) { this.isLightenUp = bool}

    public getI() { return this.i }
    public getJ() { return this.j }
    public getType() { return this.type }
    public getIsLight() { return this.isLight }
    public getIsBlock() { return this.isBlock }
    public getIsCross() { return this.isCross }
    public getLightsNum() { return this.lightsNum }
    public getIsEmpty() { return this.isEmpty }
    public getIsLightenUp() { return this.isLightenUp }

}