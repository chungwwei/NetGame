export class InertiaCell {
    private i: number
    private j: number
    public type: string

    private isGem: boolean
    private isBrokenCircle: boolean
    private isPlayer: boolean
    private isWall: boolean
    private isBomb: boolean
    private isGround: boolean

    constructor(i: number, j: number, type: string, isPlayer: boolean, isWall: boolean,
                isGem: boolean, isBrokeCircle: boolean, isBomb: boolean, isGround: boolean
        ) {
        this.i = i
        this.j = j
        this.type = type 

        
        this.isPlayer = isPlayer
        this.isWall = isWall
        this.isGem = isGem
        this.isBomb = isBomb
        this.isBrokenCircle = isBrokeCircle
        this.isGround = isGround
    }

    public deepCopy() {
        return new InertiaCell(
            this.i,
            this.j,
            this.type,
            this.isPlayer,
            this.isWall,
            this.isGem,
            this.isBrokenCircle,
            this.isBomb,
            this.isGround
        )
    }

    public setIsPlayer(bool: boolean) {
        this.isPlayer = bool
    }

    public setIsWall(isWall: boolean) {
        this.isWall = isWall
    }

    public setI(i: number) { this.i = i }
    public setJ(j: number) { this.j = j }
    public setType(type: string) { this.type = type }
    public setIsGem(isGem: boolean) { this.isGem = isGem }
    public setIsBomb(isBomb: boolean) { this.isBomb = isBomb }
    public setIsBrokenCircle(isBrokenCircle: boolean) { this.isBrokenCircle = isBrokenCircle }
    public setIsGround(isGround: boolean) { this.isGround = isGround}

    public getIsPlayer() { return this.isPlayer }
    public getIsWall() { return this.isWall }
    public getIsGem() { return this.isGem }
    public getIsBomb() { return this.isBomb }
    public getIsGround() { return this.isGround }
    public getIsBrokenCircle() { return this.isBrokenCircle}
    public getI() { return this.i }
    public getJ() { return this.j }
    public getType() { return this. type }

    public toString = () : string => {
        return `${this.i}, ${this.j}: ${this.isPlayer}`
    }
}