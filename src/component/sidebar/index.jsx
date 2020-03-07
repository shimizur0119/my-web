import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

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

import LIB from "../../lib";

const SideList = props => {
  const classes = useStyles();
  const listMap = LIB.list_map;
  const list = Object.keys(listMap);
  return (
    <div
      role="presentation"
      className={classes.sidebar}
      onClick={() => props.func(false)}
    >
      <List>
        {list.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              props.history.push(listMap[text].url);
            }}
            disabled={!listMap[text].act}
          >
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
      <SideList func={props.func} history={props.history} />
    </Drawer>
  );
};

export default withRouter(Sidebar);
