import { useState, useEffect } from 'react'
import { Inertia } from '../../game/inertia/Inertia'
import { InertiaCellComponent } from './InertiaCellComponent'
import player from '../../images/player.png'


export const InertiaComponent: React.FC<InertiaProps> = props => {
    const game: Inertia = props.game
    const [board, setBoard] = useState(game.getBoard())
    const [refresh, setRefresh] = useState(false)
    const move = (i: number, j: number, game: Inertia) => {
        console.log(`cell clicks (${i}, ${j})`)
        game.movePlayer(i, j)

        setRefresh(pre => !pre)
        
    }

    const slidePlayer = useEffect(() => {
        const timer = setTimeout(() => {
            // this will run after 1 s
        }, 1000)
        
        // when component un-mount remove the timer
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="pipe_board center">
            <div className="grid_container">
                {
                    game.getBoard().map((row, i)=>(
                        <div className="pipe_grid_row">
                            {row.map((item, j)=>(
                                <InertiaCellComponent
                                    i={item.getI()}
                                    j={item.getJ()}
                                    onClick={()=>move(i, j, game)}
                                    imgSrc={item.getType()}
                                    type={item.getType()}
                                    isPlayer={item.getIsPlayer()}
                                    isWall={item.getIsWall()}
                                    isBrokenCirlce={item.getIsBrokenCircle()}
                                    isGem={item.getIsGem()}
                                    isBomb={item.getIsBomb()}
                                    isGround={item.getIsGround()}
                                ></InertiaCellComponent>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

interface InertiaProps {
    game: Inertia
}

interface InertiaState {

}