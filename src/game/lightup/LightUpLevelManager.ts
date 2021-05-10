import { LightUpLevel } from "./LightUpLevel"

export class LightUpLevelManager {

    private curLevel: string
    private levels: Map<string, LightUpLevel>

    constructor() {
        this.curLevel = '1'
        this.levels = new Map()

        const level1 = new LightUpLevel(
            '1',
            [
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', '2', '0', 'e', 'e'],
                ['e', 'e', 'e', 'b', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', '1', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', '0', '0', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
            ],
            5,
        )

        
        const level2 = new LightUpLevel(
            '2',
            // [
            //     ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
            //     ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
            //     ['b', 'b', 'e', 'e', '0', 'e', '1', 'e', 'e', 'b'],
            //     ['b', 'b', 'e', '0', 'e', 'e', 'e', '0', 'e', 'b'],
            //     ['b', 'b', 'e', 'b', 'e', 'e', 'e', 'e', 'e', 'b'],
            //     ['b', 'b', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'b'],
            //     ['b', 'b', 'e', '1', 'e', 'e', 'e', '2', 'e', 'b'],
            //     ['b', 'b', 'e', 'e', '1', 'e', '2', 'e', 'e', 'b'],
            //     ['b', 'b', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'b'],
            //     ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
            // ],
            [
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', '2', '0', 'e', 'e'],
                ['e', 'e', 'e', 'b', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', '1', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', '0', '0', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
                ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
            ],
            5
        )

        const level3 = new LightUpLevel(
            '3',
            [
                ['j', 'g', 'c', 'g', 'g', 'w', 'j', 'j', 'g', 'g'],
                ['c', 'g', 'j', 'g', 'j', 'g', 'c', 'g', 'c', 'w'],
                ['g', 'j', 'g', 'g', 'j', 'g', 'g', 'w', 'g', 'c'],
                ['c', 'j', 'g', 'g', 'c', 'w', 'j', 'c', 'g', 'g'],
                ['c', 'g', 'c', 'w', 'b', 'g', 'g', 'g', 'w', 'c'],
                ['c', 'w', 'c', 'g', 'b', 'c', 'w', 'c', 'c', 'j'],
                ['g', 'g', 'c', 'c', 'g', 'c', 'g', 'g', 'g', 'j'],
                ['j', 'j', 'w', 'c', 'g', 'c', 'w', 'g', 'b', 'j'],
                ['g', 'j', 'j', 'g', 'j', 'c', 'j', 'g', 'g', 'j'],
                ['j', 'j', 'j', 'g', 'j', 'g', 'j', 'w', 'g', 'g']
            ],
            5
        )

        const level4 = new LightUpLevel(
            '4',
            [
                ['j', 'g', 'c', 'g', 'g', 'w', 'j', 'j', 'g', 'g'],
                ['c', 'g', 'j', 'g', 'j', 'g', 'c', 'b', 'c', 'w'],
                ['g', 'j', 'g', 'c', 'j', 'g', 'g', 'w', 'g', 'c'],
                ['w', 'w', 'w', 'j', 'c', 'w', 'j', 'c', 'g', 'g'],
                ['w', 'g', 'c', 'j', 'g', 'g', 'g', 'g', 'w', 'c'],
                ['w', 'w', 'w', 'j', 'b', 'c', 'w', 'c', 'c', 'c'],
                ['w', 'g', 'c', 'g', 'g', 'j', 'g', 'g', 'g', 'j'],
                ['j', 'j', 'b', 'c', 'b', 'j', 'w', 'b', 'b', 'j'],
                ['j', 'c', 'j', 'g', 'j', 'c', 'b', 'g', 'g', 'j'],
                ['j', 'j', 'j', 'g', 'j', 'g', 'j', 'w', 'g', 'g']
            ],
            5
        )

        const level5 = new LightUpLevel(
            '5',
            [
                ['j', 'g', 'c', 'b', 'g', 'w', 'j', 'j', 'g', 'b'],
                ['c', 'g', 'j', 'g', 'j', 'j', 'c', 'b', 'c', 'w'],
                ['g', 'j', 'g', 'c', 'c', 'j', 'g', 'w', 'j', 'c'],
                ['w', 'w', 'w', 'g', 'c', 'w', 'j', 'w', 'j', 'b'],
                ['c', 'j', 'c', 'j', 'g', 'g', 'g', 'g', 'w', 'c'],
                ['c', 'w', 'w', 'j', 'b', 'j', 'w', 'c', 'c', 'c'],
                ['w', 'g', 'c', 'g', 'g', 'c', 'g', 'g', 'g', 'w'],
                ['j', 'j', 'b', 'c', 'b', 'j', 'w', 'b', 'b', 'j'],
                ['j', 'c', 'j', 'g', 'j', 'c', 'b', 'g', 'g', 'w'],
                ['j', 'b', 'j', 'c', 'g', 'j', 'g', 'w', 'g', 'j']
            ],
            5
        )
        this.levels.set('1', level1)
        this.levels.set('2', level2)
        this.levels.set('3', level3)
        this.levels.set('4', level4)
        this.levels.set('5', level5)
    }

    public setCurLevel(level: string) { this.curLevel = level } 
    public getCurLevel() { return this.curLevel } 
    public getLevels() { return this.levels }

    public getLevel(requestedLevel: string) {
        
        if (requestedLevel !== undefined && requestedLevel !== null) {
            return this.levels.get(requestedLevel)
        }
        return 
    }

    public getLevelRequirement() {
        if (this.curLevel !== undefined && this.curLevel !== null) {
            return this.levels.get(this.curLevel)?.getLevelLightRequirement()
        }
    }
}