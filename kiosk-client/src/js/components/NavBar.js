import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Icon>confirmation_number</Icon>
                <Typography variant="title" color="inherit">
                    Kiosk Client
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;