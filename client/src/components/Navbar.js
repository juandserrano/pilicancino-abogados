import React from "react";
import { Grid, AppBar, Toolbar, IconButton, Typography, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolBarText: {
    color: "rgb(200, 200, 200)",
    fontSize: "15px",
    textShadow: "2px 2px 2px black",
    "&:hover": {
      color: "rgb(250,250,250)",
    },
    padding: "5px",
  },
  toolBar: {
    background: "rgb(50, 50, 50)",
    minHeight: "30px",
  },
  appbar: {
    position: "fixed",
    top: "0",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container justify="space-around">
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">QUIENES SOMOS</Typography>
            </IconButton>
          </Link>
          <Link to="/servicios" style={{ textDecoration: "none" }}>
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">SERVICIOS</Typography>
            </IconButton>
          </Link>
          <Link to="/contacto" style={{ textDecoration: "none" }}>
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">CONTACTO</Typography>
            </IconButton>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
