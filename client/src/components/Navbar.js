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
    background: "rgb(80, 80, 80)",
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
          <Link to="/">
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">Quienes Somos</Typography>
            </IconButton>
          </Link>
          <Link to="/servicios">
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">Nuestros Servicios</Typography>
            </IconButton>
          </Link>
          <Link to="/contacto">
            <IconButton className={classes.toolBarText} color="inherit" aria-label="menu">
              <Typography variant="body1">Contactenos</Typography>
            </IconButton>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
