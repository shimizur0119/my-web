import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Sidebar from "../sidebar";

const Header = props => {
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
        </Toolbar>
      </AppBar>
      <Sidebar open={open} func={setOpen} />
    </>
  );
};

export default Header;
