import { useState } from 'react'
import { Button, Typography, AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    homeBtn: {
        marginRight: 2
    }

})
export const AppBarComponent = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <Button className={classes.homeBtn}> HOME </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

