import React from 'react'
import { Button, Card, CardContent, Menu, MenuItem, Typography } from '@material-ui/core';

const HudComponent = () => {
    return (
        <div className='hud'>
            {/* <Card>
                <CardContent>
                    <Typography> 12:13 </Typography>
                </CardContent>
            </Card> */}
            {/* <Menu>
                <MenuItem> hi </MenuItem>
                <MenuItem> ff </MenuItem>
                <MenuItem> gg </MenuItem>
                <MenuItem> f3 </MenuItem>
            </Menu> */}
            <Button> START </Button>
            <Button> flow </Button>
            <Button> reset </Button>
            <Button> undo </Button>
            <Button> redo </Button>
        </div>
    )
}

export default HudComponent