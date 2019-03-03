import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Nav from './Nav'

const NavBar = (props) => {
    return(
        <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Nav />
                <Typography variant="title" color="inherit">
                    Kiosk Admin
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;