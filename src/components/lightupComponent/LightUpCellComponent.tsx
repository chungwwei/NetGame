import React from "react"
import { LightUpCell } from "../../game/lightup/LightUpCell"
import lightbulb from '../../images/lightbulb.png'
import { Pair } from "./LightUpComponent"


export const LightUpCellComponent: React.FC<LightUpCellProps> = (props) => {
    const {
        i,
        j,
        onClick,
        type,
        isLight,
        isBlock,
        isCross,
        isEmpty,
    } = props

    const cellClassName = isBlock ? 
        'inertia_broken_circle' 
        : 'inertia_ground'

    // const cellClassName = isPlayer
    //     ? 'inertia_player'
    //     : isWall
    //     ? 'inertia_wall'
    //     : isBrokenCirlce
    //     ? 'inertia_broken_circle'
    //     : isGem
    //     ? 'inertia_gem'
    //     : isBomb
    //     ? 'inertia_bomb'
    //     : isGround
    //     ? 'inertia_ground'
    //     : ''
        
    const imgName = isLight
        ? lightbulb
        : ''
    
    // document.getElementById(`cell-${i}-${j}`)!.className = 'inertia_ground' 
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

interface LightUpCellProps {
    i: number
    j: number

    imgSrc: string
    type: string

    isLight: boolean
    isBlock: boolean
    isCross: boolean
    isEmpty: boolean

    onClick: any
}