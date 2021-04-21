import { Button } from '@material-ui/core'
import React from 'react'
import { Inertia } from '../../game/inertia/Inertia'
import { InertiaComponent } from './InertiaComponent'


export const InertiaApp = () => {
    const inertia = new Inertia(10, 10)
    return (
        <div className="inertia__app">
            <h1> INERTIA </h1>
            <div> 
                <Button> Reset </Button>
                <Button> Undo </Button>
                <Button> Redo </Button>
            </div>
            
            <div>
                <InertiaComponent game={inertia}></InertiaComponent>
            </div>
            <div> instruction </div>
            <div> about </div>
        </div>
    )
}

