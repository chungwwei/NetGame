import React, { Component } from 'react'
import wall from '../images/wall.png'
import player from '../images/player.png'
import endpoint from '../images/endpoint.png'
import ground from '../images/ground.png'
import box from '../images/box.png'

interface SokobanCellProps {
    i: number
    j: number

    imgSrc: string
    type: string

    isPlayer: boolean
    isBox: boolean

    onClick: any
}


export class SokobanCellComponent extends Component<SokobanCellProps> {
    render() {
        const {
            i,
            j,
            imgSrc,
            onClick,
            type,
            isPlayer,
            isBox
        } = this.props

        // const cellClassName = isFinish
        //     ? 'cell_finish'
        //     : isStart 
        //     ? 'cell_start'
        //     : isPartPath
        //     ? 'cell_path'
        //     : 'pipe_grid_cell'
        const cellClassName = type === 'g'
            ? 'ground'
            : type === 'w'
            ? 'wall'
            : type === 'e'
            ? 'endpoint'
            : 'ground'

        const imgName = isPlayer === true
            ? player
            : isBox === true
            ? box
            : ''

        const style = "style='height: 100%; width: 100%; object-fit: contain"
        // const i0 = require('../images/i0.png')
        return (
            <div
                id={`cell-${i}-${j}`}
                className={`node ${cellClassName}`}
                onClick={() => onClick(i, j, type)}
                // onMouseDown={() => onMouseDown(row, col)}
                // onMouseEnter={() => onMouseEnter(row, col)}
                // onMouseUp={() => onMouseUp()}></div> 
            >
                <img 
                    // className={'img'}
                    src={imgName} alt={''}
                />
            </div>
        )
    }
}