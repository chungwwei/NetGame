import { Button } from '@material-ui/core'
import { useState } from 'react'
import { Inertia } from '../../game/inertia/Inertia'
import { InertiaComponent } from './InertiaComponent'


const inertia = new Inertia(10, 10)
export const InertiaApp = () => {
    const [refresh, setRefresh] = useState(false)

    const handleReset = () => {
        inertia.reset()
    }

    const handleRedo = () => {
        inertia.redo()
        setRefresh(prev => !prev)
    }

    const handleUndo = () => {
        inertia.undo()
        console.log('after undo')
        console.log(inertia.getCommandManager().undoStk)
        console.log(`player position ${inertia.getPlayer().getX()} ${inertia.getPlayer().getY() }`)
        setRefresh(prev => !prev)
    }

    return (
        <div className="inertia__app">
            <h1> INERTIA </h1>
            <div> 
                <Button onClick={()=>handleReset()}> Reset </Button>
                <Button onClick={()=>handleUndo()}> Undo </Button>
                <Button onClick={()=>handleRedo()}> Redo </Button>
            </div>
            
            <div>
                <InertiaComponent game={inertia}></InertiaComponent>
            </div>
            <div> instruction </div>
            <div> about </div>
        </div>
    )
}

