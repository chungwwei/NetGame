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
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', 'start', '', '', '', '', '', ''],
                ['', '', '', '', 'd1', 'd0', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', 'i1', 'i0', 'finish', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '']
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
                ['start', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'i1', 't0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
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
            ]
        )
    }
}