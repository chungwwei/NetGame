import * as React from 'react';
import { FloodTubes } from '../game/FloodTube';
import { CellComponent } from './CellComponent';

export interface FloodTubeProps {
  game: FloodTubes
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

    console.log('mouseCLICKCKCJKVJK')
    this.props.game.rotate(i, j, type)

    this.setState({refresh: !this.state.refresh})

  }

  runBFS() {
    let newPath = this.props.game.BFS()
    // for (let i = 0; i < newPath.length; i ++) {
    //   setTimeout(()=>{
    //     let newGrid = this.state.grid.slice()
    //     this.setState({
    //       path: newPath
    //     })
    //   }, 1000 * i)
    // }
  }


  public render() {
    let board = this.props.game.getBoard()
    // let board = this.state
    console.log(board)
    return (
      <div>
          <h1>Flood Tube</h1>
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
        <button onClick={()=>this.runBFS()}>RUN BFS</button>
      </div>
    );
  }
}
