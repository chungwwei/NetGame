import { request } from "http"
import { SokobanLevel } from "./SokobanLevel"

export class SokobanLevelManager {

    private curLevel: string
    private levels: Map<string, SokobanLevel>

    constructor() {
        this.curLevel = '1'
        this.levels = new Map()
        
        let level1 = new SokobanLevel(
            'level1',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'e', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'e', 'e', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'e', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [3, 3],
            [2, 5]
        ],
        [
            [5, 5]
        ]
        )

        let level2 = new SokobanLevel(
            'level2',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'w', 'g', 'g', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [2, 3],
            [2, 2],
        ],
        [
            [5, 5]
        ]
        )


        let level3 = new SokobanLevel(
            'level3',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'e', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', '', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'w', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [3, 3],
            [2, 2],
        ],
        [
            [6, 5]
        ]
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