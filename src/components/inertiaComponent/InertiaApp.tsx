import { useState } from 'react'
import { Inertia } from '../../game/inertia/Inertia'
import { InertiaComponent } from './InertiaComponent'
import { Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { InertiaLevel } from '../../game/inertia/InertiaLevel'


const inertia = new Inertia(10, 10)
const levels: Map<string, InertiaLevel> = inertia.getLevels()
export const InertiaApp = () => {
    console.log([...levels.keys()])
    const [refresh, setRefresh] = useState(false)

    const handleReset = () => {
        inertia.reset()
        setRefresh(prev => !prev)
    }

    const handleRedo = () => {
        inertia.redo()
        setRefresh(prev => !prev)
    }

    const handleUndo = () => {
        inertia.undo()
        console.log('after undo')
        console.log(inertia.getCommandManager().undoStk)
        console.log(`player position ${inertia.getPlayer().getX()} ${inertia.getPlayer().getY()}`)
        setRefresh(prev => !prev)
    }

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        let requestedLevel: string = event.target.value
        inertia.loadLevel(requestedLevel)
        setRefresh(prev => !prev)
    }

    return (
        <div className="inertia__app">
            <h1> INERTIA </h1>
            <Select labelId="label" id="select" onChange={(e: any) => handleChange(e)}>
                {
                    [...levels.keys()].map(i => (
                        <MenuItem value={i}> {i} </MenuItem>
                    ))
                }
                {/* <MenuItem value="1"> 1 </MenuItem>
                <MenuItem value="2"> 2 </MenuItem>
                <MenuItem value="3"> 3 </MenuItem> */}
            </Select>
            <div>
                <Button onClick={() => handleReset()}> Reset </Button>
                <Button onClick={() => handleUndo()}> Undo </Button>
                <Button onClick={() => handleRedo()}> Redo </Button>
            </div>

            <div>
                <InertiaComponent game={inertia}></InertiaComponent>
            </div>
            <div> instruction </div>
            <div> about </div>
        </div>
    )
}

