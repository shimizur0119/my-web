import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./style/theme"

// material-ui
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// my component
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Body from "./component/body";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header title="Shimizu's web site" />
        <Body />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
