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
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'e', 'e', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [3, 3],
        ],
        [
            [5, 5]
        ]
        ,
            2
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
        ],
            2
        )


        let level3 = new SokobanLevel(
            'level3',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'e', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'w', 'w', 'g', 'g', 'w'],
            ['w', 'w', 'w', 'g', 'g', 'w', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [3, 3],
            [2, 2],
        ],
        [
            [6, 5]
        ],
            2
        )



        let level4 = new SokobanLevel(
            'level4',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'w', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'e', 'w', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [4, 3],
            [3, 3]
        ],
        [
            [6, 5]
        ],
            3
        )

        let level5 = new SokobanLevel(
            'level5',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'w', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'e', 'w', 'w', 'w', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'e', 'w', 'w', 'w', 'w', 'g', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [4, 3],
            [3, 3]
        ],
        [
            [8, 2]
        ],
            3
        )

        let level6 = new SokobanLevel(
            'level6',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'e', 'g', 'e', 'g', 'e', 'g', 'g', 'w'],
            ['w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', 'g', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'g', 'w', 'w', 'w', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'w', 'w', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'w', 'w', 'w', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [3, 6],
            [3, 4],
            [3, 2],
            [5, 5]
        ],
        [
            [8, 2]
        ],
            4
        )

        let level7 = new SokobanLevel(
            'level7',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'w', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'e', 'w', 'e', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 4],
            [3, 4],
            [4, 4],
        ],
        [
            [8, 2]
        ],
            3
        )

        let level8 = new SokobanLevel(
            'level8',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'e', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'e', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [5, 5],
            [4, 4],
            [6, 4]
        ],
        [
            [5, 4]
        ],
            4
        )


        let level9 = new SokobanLevel(
            'level9',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'e', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'g', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'e', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 3],
            [5, 5],
            [4, 4],
            [6, 4]
        ],
        [
            [5, 4]
        ],
            4
        )

        let level10 = new SokobanLevel(
            'level10',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 4],
            [4, 4],
            [3, 4],
            [4, 3],
            [4, 2],
            [4, 5]
        ],
        [
            [5, 3]
        ],
            6
        )

        let level11 = new SokobanLevel(
            'level11',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'w', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'w', 'e', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'g', 'g', 'w', 'g', 'g', 'w', 'g', 'e', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [5, 4],
            [4, 4],
            [3, 4],
            [4, 3],
            [4, 2],
            [4, 5],
            [6, 2],
            [5, 2]
        ],
        [
            [5, 3]
        ],
            8
        )

        let level12 = new SokobanLevel(
            'level12',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'g', 'g', 'g', 'e', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [4, 2],
            [4, 3],
            [4, 4],
            [4, 5],
        ],
        [
            [4, 1]
        ],
            4
        )

        let level13 = new SokobanLevel(
            'level13',
        [
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'e', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'e', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
        ],
        [
            [4, 2],
            [4, 3],
        ],
        [
            [4, 1]
        ],
            2
        )



        this.levels.set('1', level1)
        this.levels.set('2', level2)
        this.levels.set('3', level3)
        this.levels.set('4', level4)
        this.levels.set('5', level5)
        this.levels.set('6', level6)
        this.levels.set('7', level7)
        this.levels.set('8', level8)
        this.levels.set('9', level9)
        this.levels.set('10', level10)
        this.levels.set('11', level11)
        this.levels.set('12', level12)
        this.levels.set('13', level13)


        
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