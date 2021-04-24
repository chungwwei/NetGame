import React from "react"
import { Inertia } from "../../game/inertia/Inertia"
import player from '../../images/player.png'
import wall from '../../images/wall.png'
import gem from '../../images/4ways.png'
import bomb from '../../images/box.png'

export const InertiaCellComponent: React.FC<InertiaCellProps> = (props) => {
    const {
        i,
        j,
        onClick,
        type,
        isPlayer,
        isWall,
        isBrokenCirlce,
        isGem,
        isBomb,
        isGround,
    } = props

    const cellClassName = 
        isBrokenCirlce ?
        'inertia_broken_circle':
        'inertia_ground'
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
        
    const imgName = isPlayer
        ? player
        : isWall
        ? wall
        : isBrokenCirlce
        ? 'inertia_broken_circle'
        : isGem
        ? gem
        : isBomb
        ? bomb
        : isGround
        ? 'inertia_ground'
        : ''

        
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

interface InertiaCellProps {
    i: number
    j: number

    imgSrc: string
    type: string

    isPlayer: boolean
    isWall: boolean
    isBrokenCirlce: boolean
    isGem: boolean
    isBomb: boolean
    isGround: boolean

    onClick: any
}