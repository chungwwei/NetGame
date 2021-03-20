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
                ['d1', 'finish', 'd0', 'i0', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d1', 'blank', 'd0', 'd1', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['i0', 'd0', 'blank', 'd1', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['start', 'i0', 'i0', 'i0', 't1', 'finish', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['finish', 'd1', 'finish', 'd1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d1', 't1', 'd0', 't1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['finish', 'i0', 'start', 'd1', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['i0', 'i0', 't1', 'd1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d2', 'd1', 'd2', 't1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['finish', 'd1', 'finish', 'd1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d1', 't1', 'd0', 't1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['finish', 'i0', 'start', 'd1', 'd1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['i0', 'i0', 't1', 'd1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d2', 'd1', 'd2', 't1', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 'd0', '', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 't0', 'i0', 'i0', 't1', 't2', 'finish', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 't2', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't0', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['start', 't0', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 't0', 'i0', 'i0', 't1', 't2', 'finish', 'blank', 'blank', 'blank'],
                ['blank', 'finish', 'blank', 'blank', 't2', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't0', 't1', 'finish', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'finish', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
        )


        this.levels.get('wrapping')?.push(
            [
                ['i0', 'start', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'd0', 'i0'],
                ['blank', 'd0', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'finish', 'blank'],
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
                ['start', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'finish', 'blank'],
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
                ['i0', 'd2', 't1', 'blank', 'blank', 'blank', 'blank', 'blank', 'i0', 'finish'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'd2', 'd3'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['blank', 'blank', 'blank', 'blank', 't0', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['d0', 't1', 'finish', 'blank', 'start', 'i0', 'i0', 'd1', 'blank', 'blank'],
                ['t1', 'blank', 'blank', 'blank', 'i1', 'blank', 'blank', 'd1', 'i0', 'i0'],
                ['blank', 'blank', 'blank', 'blank', 'i1', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
            [
                ['blank', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'finish', 'blank'],
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
                ['blank', 'i1', 'd0', 'blank', 'blank', 'blank', 'blank', 'blank', 'finish', 'blank'],
                ['i1', 'i1', 't0', 't2', 'finish', 'blank', 'blank', 'blank', 't1', 'i1'],
                ['blank', 'blank', 't1', 'blank', 'blank', 'blank', 'blank', 'blank', 't1', 'i1'],
                ['blank', 'blank', 'start', 'blank', 'blank', 'blank', 'blank', 'finish', 'd0', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'],
                ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank']
            ],
        )
    }
}