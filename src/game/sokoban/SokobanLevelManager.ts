import { SokobanLevel } from "./SokobanLevel"

export class SokobanLevelManager {

    private curLevel: string
    private levels: Map<string, SokobanLevel>

    constructor() {
        this.curLevel = 'level0'
        this.levels = new Map()
    }

    public setCurLevel(level: string) { this.curLevel = level } 
    public getCurLevel() { return this.curLevel } 
}