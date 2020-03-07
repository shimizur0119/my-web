import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box
} from "@material-ui/core";

import Home from "../home";
import Profile from "../profile";

import useStyle from "../../style/index"

const Body = () => {
  const classes = useStyle()
  return (
    <Box m={3}>
      <Route path="/" render={()=><Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
    </Box>
  );
};

export default Body;
