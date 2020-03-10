import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import pic1 from "../../pic/gif_1.gif";

import Sidebar from "../sidebar";
import useStyle from "../../style/index";

const Header = props => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" children={props.title} />
          <Avatar alt="logo" src={pic1} className={classes.sidebar_right} />
        </Toolbar>
      </AppBar>
      <Sidebar open={open} func={setOpen} />
    </>
  );
};

export default Header;
