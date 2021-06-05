import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const MainBar = ({
    title,
    classes,
    setOpenCart,
}) => {

    return <>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <Tooltip title="Show Cart" aria-label="create-task">
                    <Chip
                        size="small"
                        color="secondary"
                        label='Show cart'
                        icon={<ShoppingCartOutlinedIcon />}
                        className={classes.chipStyle}
                        onClick={() => setOpenCart(true)}
                        clickable
                    />
                </Tooltip>
                <Tooltip title="Logged in user" aria-label="login-user">
                    <Chip
                        size="small"
                        color="default"
                        label={'User'}
                        icon={<FaceIcon />}
                        clickable
                    />
                </Tooltip>
            </Toolbar>
        </AppBar>
    </>
};

export default MainBar;