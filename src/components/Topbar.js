import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/images/logo.png";

import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    padding: "5px",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="sticky" color="#fff">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />

          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          <Button style={{ position: "absolute", right: "0" }}>
            <SideMenu />
          </Button>
          {/* </IconButton> */}

        </Toolbar>
      </AppBar>
    </div>
  );
}
