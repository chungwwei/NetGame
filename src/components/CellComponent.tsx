import React, { Component } from 'react'
import { isParenthesizedExpression } from 'typescript'
import i0 from '../images/i0.png'
import i1 from '../images/i1.png'
import start from '../images/start.png'
import finish from '../images/finish.png'
import d0 from '../images/d0.png'
import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.png'
import t0 from '../images/t0.png'
import t1 from '../images/t1.png'
import t2 from '../images/t2.png'
import t3 from '../images/t3.png'
import four_ways from '../images/4ways.png'


interface CellProps {
    i: number
    j: number

    isStart: boolean
    isFinish: boolean
    isPartPath: boolean

    imgSrc: string
    type: string

    onClick: any
}


export class CellComponent extends Component<CellProps> {
    render() {
        const {
            i,
            j,
            isStart,
            isFinish,
            isPartPath,
            imgSrc,
            onClick,
            type,
        } = this.props

        const cellClassName = isFinish
            ? 'cell_finish'
            : isStart 
            ? 'cell_start'
            : isPartPath
            ? 'cell_path'
            : 'pipe_grid_cell'

        const imgName = type === 'i0'
            ? i0
            : type === 'i1'
            ? i1
            : type === 'finish'
            ? finish
            : type === 'start'
            ? start
            : type === 'd0'
            ? d0
            : type === 'd1'
            ? d1
            : type === 'd2'
            ? d2
            : type === 'd3'
            ? d3
            : type === 't0'
            ? t0
            : type === 't1'
            ? t1
            : type == 't2'
            ? t2
            : type === 't3'
            ? t3
            : type === '4ways'
            ? four_ways
            : ''

        // const i0 = require('../images/i0.png')
        return (
            <div
                id={`node-${i}-${j}`}
                className={`node ${cellClassName}`}
                onClick={() => onClick(i, j, type)}
                // onMouseDown={() => onMouseDown(row, col)}
                // onMouseEnter={() => onMouseEnter(row, col)}
                // onMouseUp={() => onMouseUp()}></div> 
            >
                <img 
                    src={imgName} alt={''}
                />
            </div>
        )
    }
}