import { InertiaLevel } from "./InertiaLevel"

export class InertiaLevelManager {

    private curLevel: string
    private levels: Map<string, InertiaLevel>

    constructor() {
        this.curLevel = '1'
        this.levels = new Map()

        const level1 = new InertiaLevel(
            '1',
            [
                ['g', 'g', 'c', 'j', 'j', 'g', 'c', 'j', 'w', 'g'],
                ['g', 'g', 'j', 'g', 'j', 'g', 'g', 'g', 'g', 'w'],
                ['g', 'g', 'g', 'g', 'j', 'g', 'g', 'g', 'g', 'c'],
                ['c', 'j', 'g', 'g', 'c', 'w', 'g', 'g', 'g', 'g'],
                ['c', 'j', 'c', 'w', 'b', 'g', 'g', 'g', 'w', 'c'],
                ['j', 'j', 'c', 'g', 'b', 'g', 'g', 'c', 'c', 'j'],
                ['j', 'j', 'c', 'c', 'j', 'c', 'g', 'g', 'g', 'j'],
                ['j', 'g', 'w', 'c', 'j', 'c', 'w', 'g', 'b', 'j'],
                ['j', 'g', 'j', 'g', 'j', 'w', 'g', 'g', 'g', 'j'],
                ['j', 'j', 'j', 'g', 'j', 'g', 'j', 'w', 'g', 'g']
            ],
            [0, 0],
            5
        )

        
        const level2 = new InertiaLevel(
            '2',
            [
                ['j', 'g', 'c', 'g', 'g', 'w', 'j', 'j', 'g', 'g'],
                ['c', 'g', 'j', 'g', 'j', 'g', 'c', 'g', 'g', 'w'],
                ['g', 'j', 'g', 'g', 'j', 'g', 'g', 'g', 'g', 'c'],
                ['c', 'j', 'g', 'g', 'c', 'w', 'w', 'g', 'g', 'g'],
                ['c', 'g', 'c', 'w', 'b', 'g', 'g', 'g', 'w', 'c'],
                ['c', 'w', 'c', 'g', 'b', 'g', 'w', 'c', 'c', 'j'],
                ['g', 'g', 'c', 'c', 'j', 'c', 'g', 'g', 'g', 'j'],
                ['j', 'j', 'w', 'c', 'j', 'c', 'w', 'g', 'b', 'j'],
                ['g', 'j', 'j', 'g', 'j', 'w', 'g', 'g', 'g', 'j'],
                ['j', 'j', 'j', 'g', 'j', 'g', 'j', 'w', 'g', 'g']
            ],
            [5, 5],
            5
        )

        const level3 = new InertiaLevel(
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
            [1, 1],
            5
        )

        const level4 = new InertiaLevel(
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
            [1, 3],
            5
        )

        const level5 = new InertiaLevel(
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
            [1, 3],
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
        
        if (requestedLevel !== undefined || requestedLevel !== null) {
            return this.levels.get(requestedLevel)
        }
        return 
    }
}