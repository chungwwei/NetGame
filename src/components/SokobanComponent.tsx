import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { request } from 'http';
import * as React from 'react';
import { SokobanMoveCommand } from '../ds/SokobanMoveCommand';
import { FloodTubes } from '../game/FloodTube';
import { Sokoban } from '../game/sokoban/Sokoban';
import { CellComponent } from './CellComponent';
import { HudComponent } from './HudComponent'
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
    let game = this.props.game
    if (movable) {
      if (withBox) {
        console.log('move box')
        this.props.game.moveBox(code)
      } else {
        console.log('move player')
        this.props.game.movePlayer(code)
      }

      //
      let manager = game.getCommandManager()
      let command: SokobanMoveCommand = new SokobanMoveCommand(game, game.getBoard(), game.getPlayer())
      manager.execute(command)
      console.log(manager.undoStk)
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

  handleRedoClick() {
    let game = this.props.game
    game.redo()
    this.setState({
      refresh: !this.state.refresh
    })
  }

  handleUndoClick() {
    console.log("undo is clicked")
    let game = this.props.game
    game.undo()
    console.log(game.getCommandManager().undoStk)
    this.setState({
      refresh: !this.state.refresh
    })
  }

  handleSolveClick() {
    throw new Error('Method not implemented.');
  }
  handleReset() {
    throw new Error('Method not implemented.');
  }

  handleChange(event: React.ChangeEvent<{ value: string }>) {
    alert(event.target.value)
    let requestedLevel: string = event.target.value
    this.props.game.loadLevel(requestedLevel)
    this.setState({
      refresh: !this.state.refresh
    })
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
        <div className='hud'>
          <InputLabel id="label">Levels</InputLabel>
          <Select labelId="label" id="select" onChange={(e: any)=>this.handleChange(e)}>
            <MenuItem value="1"> 1 </MenuItem>
            <MenuItem value="2"> 2 </MenuItem>
            <MenuItem value="3"> 3 </MenuItem>
          </Select>
          <Button variant="outlined" color='primary' onClick={() => { this.handleReset() }}> reset </Button>
          <Button variant="outlined" color='primary' onClick={() => { this.handleUndoClick() }}> undo </Button>
          <Button variant="outlined" color='primary' onClick={() => { this.handleRedoClick() }}> redo </Button>
          <Button variant="outlined" color='primary' onClick={() => { this.handleSolveClick() }}> solve </Button>
        </div>
        <div className="pipe_board center" tabIndex={0} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => this.handleKeys(e)}>
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
                      onClick={(i: number, j: number, type: string) => { }}
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