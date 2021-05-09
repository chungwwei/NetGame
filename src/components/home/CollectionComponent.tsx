import { useState } from 'react'
import { Button, Typography, Grid, Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { InertiaApp } from '../inertiaComponent/InertiaApp';
import SokobanComponent from '../SokobanComponent';
import { HudComponent } from '../HudComponent';
import { FloodTubes } from '../../game/FloodTube';
import { Sokoban } from '../../game/sokoban/Sokoban';
import { LightUpApp } from '../lightupComponent/LightUpApp';

const useStyles = makeStyles({
    collectionCard: {
        minWidth: 500,
        margin: 25,
        background: '#22A7F0'
    },
    collectionContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
    }
})


const flood_tube = new FloodTubes(10, 10)
const sokoban = new Sokoban(10, 10)
export const CollectionComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <h1> Collections </h1>
                <Route exact path="/">
                    <Grid container spacing={2} className={classes.collectionContainer} justify="center">
                        <Link to='/sokoban'>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.collectionCard}>
                                    <CardActionArea>
                                        <CardContent>
                                            <h1> Sokoban </h1>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Link>
                        <Link to='/flushtubes'>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.collectionCard}>
                                    <CardActionArea>
                                        <CardContent>
                                            <h1> Flush Tubes [work in progress]</h1>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Link>
                        <Link to='/inertia'>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.collectionCard}>
                                    <CardActionArea>
                                        <CardContent>
                                            <h1> Inertia </h1>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Link>
                        <Link to='/lightup'>
                            <Grid item xs={12} sm={6}>
                                <Card className={classes.collectionCard}>
                                    <CardActionArea>
                                        <CardContent>
                                            <h1> Light Up </h1>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Link>
                    </Grid>
                </Route>
                <Route path="/inertia">
                    <InertiaApp />
                </Route>
                <Route path="/sokoban">
                    <SokobanComponent game={sokoban}></SokobanComponent>
                </Route>
                <Route path='/flushtubes'>
                    <HudComponent game={flood_tube}></HudComponent>
                </Route>
                <Route path='/lightup'>
                    <LightUpApp />
                </Route>


            </div>

        </div>
    )
}