import React, { Component } from 'react'
import { Button, Typography, FormControl, InputLabel, Select, } from '@material-ui/core';
import { FloodTubes } from '../game/FloodTube';
import FloodTubeComponent from './FloodTubeComponent';
import { Cell } from '../game/Cell';
import { CommandManager } from '../ds/CommandManager';


interface HudProps {

    game: FloodTubes

}

interface HudState {
    refresh: boolean
    selectedLevel: string
}

export class HudComponent extends React.Component<HudProps, HudState> {

    constructor(props: HudProps) {
        super(props);

        this.state = {
            refresh: false,
            selectedLevel: 'none'
        }
    }


    handleChange(event: React.ChangeEvent<{ value: string }>) {

        const str: string = (event.target.value)
        if (str === undefined || str === null || str === '' || str === 'none') return
        const lst: string[] = str.split(' ')
        const category: string = lst[0]
        const index: number = +lst[1]

        const levels: Map<string, string[][][]> = this.props.game.getLevels()
        const newBoard: string[][] = levels.get(category)![index]
        var board: Cell[][] = this.props.game.getBoard()
        for (let i = 0; i < board.length; i ++) {
            for (let j = 0; j < board[i].length; j ++) {
                board[i][j].type = newBoard[i][j]
                board[i][j].isPartPath = false
            }
        }

        this.setState({
            refresh: !this.state.refresh,
            selectedLevel: str
        })
    }

    handleReset() {
        console.log('doing a reset')
        let str = this.state.selectedLevel
        if (str === undefined || str === null || str === '' || str === 'none') return
        const lst: string[] = str.split(' ')
        const category: string = lst[0]
        const index: number = +lst[1]

        const levels: Map<string, string[][][]> = this.props.game.getLevels()
        const newBoard: string[][] = levels.get(category)![index]
        var board: Cell[][] = this.props.game.getBoard()
        for (let i = 0; i < board.length; i ++) {
            for (let j = 0; j < board[i].length; j ++) {
                board[i][j].type = newBoard[i][j]
                board[i][j].isPartPath = false
            }
        }

        this.setState({
            refresh: !this.state.refresh,
            selectedLevel: str
        })
    }

    handleFlowClick() {

    }

    handleUndoClick() {
        let commandManager: CommandManager = this.props.game.getCommandManager()
        commandManager.undo()

        this.setState({
            refresh: !this.state.refresh
        }) 
    }

    handleRedoClick() {
        console.log('redoing')
        let commandManager: CommandManager = this.props.game.getCommandManager()
        console.log(commandManager.redoStk)
        commandManager.redo()

        this.setState({
            refresh: !this.state.refresh
        }) 
    }

    handleSolveClick() {
        let game = this.props.game
        // let category = this.state.selectedLevel.split(' ')[0]
        // game.solveBoard(category)
        // if (game.getSolutionBoard() !== undefined) {
        //     game.setBoard(game.getSolutionBoard()!)
        //     // console.log(game.getBoard())
        // }
        // this.setState({
        //     refresh: !this.state.refresh
        // }) 
        console.log('solve click')
        game.minBFS()


    }
    
    render() {
        const {
            game,
        } = this.props
        let levels: Map<string, string[][][]> = game.getLevels()
        return (
            <div>
                <h1>Flood Tubes</h1>
                <div className='hud'>
                    <FormControl>
                        <InputLabel htmlFor="grouped-native-select">Levels</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select" onChange={(e: any)=>this.handleChange(e)}>
                            <option aria-label="None" value=""/>
                            {
                                [...levels.keys()].map(k => (
                                    <optgroup label={k}>
                                        {[...Array(levels.get(k)?.length)].map((v, i) => (
                                            
                                            <option value={`${k} ${i}`}>{`${k} ${i}`}</option>
                                        ))}
                                    </optgroup>
                                ))
                            }
                            {/* <optgroup label="classic">
                                <option value={1}>Level 1</option>
                                <option value={2}>Level 2</option>
                            </optgroup>
                            <optgroup label="wrapping">
                                <option value={3}>Level 1</option>
                                <option value={4}>Level 2</option>
                            </optgroup> */}
                        </Select>
                    </FormControl>
                    <Button variant="outlined" color='primary' onClick={()=>{this.handleReset()}}> reset </Button>
                    <Button variant="outlined" color='primary' onClick={()=>{this.handleUndoClick()}}> undo </Button>
                    <Button variant="outlined" color='primary' onClick={()=>{this.handleRedoClick()}}> redo </Button>
                    <Button variant="outlined" color='primary' onClick={()=>{this.handleSolveClick()}}> solve </Button>
                </div>
                <div>
                    <FloodTubeComponent 
                        game={game}
                        selectedLevel={this.state.selectedLevel}
                    ></FloodTubeComponent>

                </div>
            </div>

        )
    }
}