import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default class Navigation extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Button color="inherit">Registration</Button>
                    <Button color="inherit">Report</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}
