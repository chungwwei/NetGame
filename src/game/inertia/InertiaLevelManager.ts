import { InertiaLevel } from "./InertiaLevel"

export class InertiaLevelManager {

    private curLevel: string
    private levels: Map<string, InertiaLevel>

    constructor() {
        this.curLevel = '1'
        this.levels = new Map()

        const level1 = new InertiaLevel(
            'level1',
            [
                ['g', 'g', 'c', 'j', 'j', 'g', 'c', 'j', 'w', 'g'],
                ['g', 'g', 'j', 'g', 'j', 'g', 'g', 'g', 'g', 'w'],
                ['g', 'g', 'g', 'g', 'j', 'g', 'g', 'g', 'g', 'c'],
                ['g', 'g', 'g', 'g', 'c', 'w', 'g', 'g', 'g', 'g'],
                ['g', 'g', 'c', 'w', 'b', 'g', 'g', 'g', 'w', 'c'],
                ['g', 'g', 'c', 'g', 'b', 'g', 'g', 'c', 'c', 'j'],
                ['g', 'g', 'c', 'c', 'j', 'c', 'g', 'g', 'g', 'j'],
                ['g', 'g', 'w', 'c', 'j', 'c', 'w', 'g', 'b', 'j'],
                ['g', 'g', 'j', 'g', 'j', 'w', 'g', 'g', 'g', 'j'],
                ['g', 'g', 'j', 'g', 'j', 'g', 'j', 'w', 'g', 'g']
            ],
            [0, 0],
            5
        )

        
        const level2 = new InertiaLevel(
            'level2',
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
            'level3',
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
        this.levels.set('1', level1)
        this.levels.set('2', level2)
        this.levels.set('3', level3)
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