import * as React from 'react';
import { LightOff } from '../game/LightOff';
import { CellComponent } from './CellComponent';

export interface BoardProps {
  game: LightOff
}

export interface BoardState {
  refresh: Boolean
}

export default class BoardComponent extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);

    this.state = {
      refresh: true
    }
  }
  
  private cellClick(i: number, j: number) {
    this.props.game.move(i, j)
    // refresh the board
    this.setState({
      refresh: this.state.refresh
    })
  }

  public render() {
    let board = this.props.game.getBoard()
    return (
      <div>
        <h1>Light Off</h1>
        <div className="board center">
          <div className='grid_container'>
            {
              board.map((lst, i) => (
                <div className='grid_row'>
                  {lst.map((item, j) => (
                    <div className={item === 0 ? "grid_cell" : "grid_cell_empty"} onClick={()=>this.cellClick(i, j)}>
                    </div>
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
