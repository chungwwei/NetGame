import { useState, useEffect, useRef } from 'react'
import { LightUp, Toggle } from '../../game/lightup/LightUp'
import { LightUpCellComponent } from './LightUpCellComponent'

export class Pair {
    public i: number
    public j: number
    constructor(i: number, j: number){
        this.i = i
        this.j = j
    }
}

const tuples: Pair[][] = []
for (let i = 0; i < 10; i ++) {
    let a = []
    for (let j = 0; j < 10; j ++) {
        a.push(new Pair(i, j))
    }
    tuples.push(a)
}

export const LightUpComponent: React.FC<LightUpProps> = props => {
    const game: LightUp = props.game
    const [board, setBoard] = useState(game.getBoard())
    const [toggleCells, setToggleCells] = useState<number[][]>([])
    const [allCells, setAllCells] = useState<number[][]>([])
    const [toggle, setToggle] = useState(Toggle.OFF)
    const [refresh, setRefresh] = useState(false)

    const move = (i: number, j: number, game: LightUp) => {
        console.log(`cell clicks (${i}, ${j})`)
        let lst = game.move(i, j)
        let toggleCells: number[][] = lst[0]
        let toggle = lst[1]
        let allCells = lst[2]
        setToggle(toggle)
        setToggleCells(toggleCells)
        setAllCells(allCells)
        
        // setRefresh(pre => !pre)
    }

    useEffect(() => {
        if (toggle === Toggle.ON) {
            console.log("TURN ONNNNNNNNNN")
            for (let i = 0; i < toggleCells.length; i++) {
                setTimeout(() => {
                    const node = toggleCells[i];
                    document.getElementById(`cell-${node[0]}-${node[1]}`)!.className =
                        'inertia_ground node-shortest-path';
                }, 10 * i)
            }
        } else {
            console.log('TURN OFFFFFFFFF')
            for (let i = 0; i < toggleCells.length; i++) {
                setTimeout(() => {
                    const node = toggleCells[i];
                    document.getElementById(`cell-${node[0]}-${node[1]}`)!.className =
                        'inertia_ground';

                }, 1)
            }
            for (let i = 0; i < allCells.length; i++) {
                setTimeout(() => {
                    const node = allCells[i];
                    document.getElementById(`cell-${node[0]}-${node[1]}`)!.className =
                        'pipe_grid_cell';

                }, 1)
            }


        }
    }, [toggleCells, toggle])

    // animatePath(path: number[][]) {
    //     console.log('animating path')
    //     for (let i = 0; i < path.length; i++) {
    //       setTimeout(() => {
    //         const node = path[i];
    //         document.getElementById(`cell-${node[0]}-${node[1]}`)!.className =
    //           'pipe_grid_cell node-shortest-path';
    //       }, 5 * i);
    //     }
    //   }


    return (
        <div className="pipe_board center">
            <div className="grid_container">
                {
                    game.getBoard().map((row, i) => (
                        <div className="pipe_grid_row">
                            {row.map((item, j) => (
                                <LightUpCellComponent
                                    i={item.getI()}
                                    j={item.getJ()}
                                    onClick={() => move(i, j, game)}
                                    imgSrc={item.getType()}
                                    type={item.getType()}
                                    isBlock={item.getIsBlock()}
                                    isCross={item.getIsCross()}
                                    isEmpty={item.getIsEmpty()}
                                    isLight={item.getIsLight()}
                                ></LightUpCellComponent>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

interface LightUpProps {
    game: LightUp
}
