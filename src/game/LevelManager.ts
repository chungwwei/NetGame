export class LevelManager {

    public levels: Map<string, string[][][]>
    public currentLevel: string

    constructor() {
        this.levels = new Map()
        this.currentLevel = 'none'
        this.initLevels()
    }



    initLevels() {
        this.levels.set('classic',  [])
        this.levels.set('wrapping', [])
        this.levels.get('classic')?.push(
            [
                ['start', 't0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 't0', 'i0', 'i0', 'd0', 't2', 'finish', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 't2', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'start', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 'i0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'd0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 'i0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'd0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ]
        )

        this.levels.get('classic')?.push(
            [
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', 'start', 'i1', 'finish', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '']
            ]
        )

        this.levels.get('wrapping')?.push(
            [
                ['start', 'i0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'd0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['i1', 'i1', 't0', 'blank', 'blank', 'blank', 'blank', 'blank', 'd2', 'i1'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'd1', 'i1'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['blank', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['i1', 'i1', 't0', 't2', 'finish', 'blank', 'blank', 'blank', 'd2', 'i1'],
                ['blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank', 'd1', 'i1'],
                ['blank', 'blank', 'start', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 'blank', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['t1', 'blank', 't0', 'blank', 'blank', 'blank', 'blank', 'blank', 'd2', 'i1'],
                ['d1', 'i0', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank', 'd1', 'i1'],
                ['blank', 'd2', 't1', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ]
        )
    }
}