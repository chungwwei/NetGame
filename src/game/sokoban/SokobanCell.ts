export class SokobanCell {
    private i: number
    private j: number
    public type: string
    public imgSrc: string
    private isPlayer: boolean
    private isBox: boolean


    constructor(i: number, j: number, type: string, isPlayer: boolean, isBox: boolean) {
        this.i = i
        this.j = j
        this.type = type 
        this.imgSrc = '/src/i0.png'
        
        this.isPlayer = isPlayer
        this.isBox = isBox

    }

    public deepCopy() {
        return new SokobanCell(
            this.i,
            this.j,
            this.type,
            this.isPlayer,
            this.isBox
        )
    }

    public setIsPlayer(bool: boolean) {
        this.isPlayer = bool
    }

    public setIsBox(bool: boolean) {
        this.isBox = bool
    }

    public getIsPlayer() { return this.isPlayer }
    public getIsBox() { return this.isBox }
}