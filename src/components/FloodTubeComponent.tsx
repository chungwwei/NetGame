import { Button } from '@material-ui/core';
import * as React from 'react';
import { FloodTubes } from '../game/FloodTube';
import { CellComponent } from './CellComponent';
import {HudComponent} from './HudComponent'

export interface FloodTubeProps {
  game: FloodTubes
  selectedLevel: string
}

export interface FloodTubeState { 
  refresh: boolean

}

export default class FloodTubeComponent extends React.Component<FloodTubeProps, FloodTubeState> {
  constructor(props: FloodTubeProps) {
    super(props);

    this.state = {
      // path: [],
      // grid: this.props.game.getBoard(),
      refresh: false
    }
  }

  handleClick(i: number, j: number, type: string) {

    this.props.game.rotate(i, j, type)
    this.setState({refresh: !this.state.refresh})

  }

  animatePath(path: number[][]) {
    console.log('animating path')
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = path[i];
        document.getElementById(`cell-${node[0]}-${node[1]}`)!.className =
          'pipe_grid_cell node-shortest-path';
      }, 5 * i);
    }
  }

  runBFS() {
    let str: string = this.props.selectedLevel
    const lst: string[] = str.split(' ')
    const category: string = lst[0]
    const index: number = +lst[1]
    if (category === 'classic') {

    } else if(category === 'wrapping') {
      let newPath = this.props.game.wrappingBFS()
      this.animatePath(newPath)
    }
  }




  public render() {
    let board = this.props.game.getBoard()
    return (
      <div>
          {/* <HudComponent
            flow={() => this.runBFS()}
            loadLevel={(level: string[][])=>this.loadLevel(level)}
            game={this.props.game}
            levels={this.props.game.getLevels()}

          ></HudComponent> */}
          <Button onClick={()=>this.runBFS()}> FLOW </Button>
          <div className="pipe_board center">
          <div className='grid_container'>
            {
              board.map((lst, i) => (
                <div className='pipe_grid_row'>
                  {lst.map((item, j) => (
                    <CellComponent
                      isFinish={false}
                      isStart={false}
                      isPartPath={item.isPartPath}
                      i={i}
                      j={j}
                      type={item.type}
                      imgSrc={item.imgSrc}
                      onClick={(i: number, j: number, type: string) => this.handleClick(i, j, item.type)}
                    ></CellComponent>
                    // <div className={"pipe_grid_cell"} onClick={()=>this.cellClick(i, j, item.type)}>
                    // </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}