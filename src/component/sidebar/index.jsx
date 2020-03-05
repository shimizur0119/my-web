import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

import useStyles from "../../style";

const SideList = props => {
  const classes = useStyles();
  return (
    <div
      role="presentation"
      className={classes.sidebar}
      onClick={() => props.func(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const Sidebar = props => {
  return (
    <Drawer open={props.open} onClose={() => props.func(false)}>
      <SideList func={props.func} />
    </Drawer>
  );
};

export default Sidebar;
