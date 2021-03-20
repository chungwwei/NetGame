import { Button } from '@material-ui/core';
import * as React from 'react';
import { FloodTubes } from '../game/FloodTube';
import { Sokoban } from '../game/sokoban/Sokoban';
import { CellComponent } from './CellComponent';
import {HudComponent} from './HudComponent'
import { SokobanCellComponent } from './SokobanCellComponent';

export interface SokobanProps {
  game: Sokoban
}

export interface SokobanState { 
  refresh: boolean

}

export default class SokobanComponent extends React.Component<SokobanProps, SokobanState> {
  constructor(props: SokobanProps) {
    super(props);

    this.state = {
      // path: [],
      // grid: this.props.game.getBoard(),
      refresh: false
    }
  }

  handleKeys(event: React.KeyboardEvent<HTMLDivElement>) {
      let code = event.key
      console.log(code)
      let respond = this.props.game.canMove(code)
      let movable: boolean = respond[0]
      let withBox: boolean = respond[1]

      if (movable) {
        if (withBox) {
          console.log('move box')
          this.props.game.moveBox(code)
        } else {
          console.log('move player')
          this.props.game.movePlayer(code)
        }
        this.setState({
          refresh: !this.state.refresh
        })
      }

    //   if(code === 'a') {
    //     // this.move("LEFT")
    //     this.props.game.move(code)
    //   } else if (code === 'w') {
    //     // this.move("UP")
    //   } else if (code === 'd') {
    //     // this.move("RIGHT")
    //   } else if (code === 's') {
    //     // this.move("DOWN")
    //   }
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
          <div className="pipe_board center" tabIndex={0} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>)=>this.handleKeys(e)}>
          <div className='grid_container'>
            {
              board.map((lst, i) => (
                <div className='pipe_grid_row'>
                  {lst.map((item, j) => (
                    <SokobanCellComponent
                      i={i}
                      j={j}
                      type={item.type}
                      imgSrc={item.type}
                      onClick={(i: number, j: number, type: string) => {}}
                      isPlayer={item.getIsPlayer()}
                      isBox={item.getIsBox()}
                    ></SokobanCellComponent>
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