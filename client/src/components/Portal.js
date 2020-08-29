import React from "react";
import { Box, Grid, AppBar, Toolbar, IconButton, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import foto from "../images/foto.jpg";
import Calificacion from "./Calificacion";
import logo from "../images/logo2.png";

const useStyles = makeStyles((theme) => ({
  foto: {
    height: "30vw",
    maxHeight: "400px",
    minHeight: "200px",
    borderRadius: "100%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  toolBarText: {
    color: "rgb(204, 102, 0)",
    fontSize: "15px",
    textShadow: "2px 2px 2px black",
    "&:hover": {
      color: "rgb(200,200,200)",
    },
  },
  toolBar: {
    background: "rgb(153, 0, 0)",
  },
  paper: {
    padding: "20px",
    background: "rgba(0,20,20,0.1)",
    textShadow: "1px 1px 1px black",
    color: "rgb(204, 102, 0)",
  },
  calificacionContainer: {
    padding: "50px",
  },
  fotoItem: {
    order: 2,
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  resumen: {
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
}));

const Portal = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container direction="column">
        <Grid item container justify="center" style={{ marginTop: "20px", marginBottom: "20px" }}>
          <img height="150px" src={logo} alt="Logo" />
        </Grid>
        <Grid item container alignItems="center">
          <Paper className={classes.paper}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item md={8} className={classes.resumen}>
                <Typography variant="body1">
                  In dolor sint pariatur fugiat amet cupidatat amet aliqua mollit adipisicing adipisicing. Reprehenderit velit ut consectetur non
                  consectetur consequat proident ipsum consectetur id nulla sit. Occaecat anim reprehenderit magna ullamco veniam in commodo irure.
                  Culpa enim cillum enim enim Lorem officia enim deserunt deserunt ea pariatur est ipsum quis. Est deserunt anim cupidatat ex
                  reprehenderit dolore esse irure. Magna ea laborum aute qui excepteur ipsum aliqua culpa minim proident irure occaecat labore. Aute
                  laboris ullamco aliqua ipsum tempor pariatur ut reprehenderit.
                </Typography>
              </Grid>
              <Grid item container justify="center" md={4} className={classes.fotoItem}>
                <img className={classes.foto} src={foto} alt="Pilar Cancino" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <br />
        <Grid item container alignItems="center" justify="center">
          <Grid item container justify="flex-end" xs={12} md={6}>
            <Typography variant="h5">Estoy trabajando en estos temas</Typography>
          </Grid>
          <Grid item container justify="center" xs={12} md={6}>
            <Typography variant="body1">
              <ul>
                <li>Asesoria Juridica Prepagada</li>
                <li>Agentes Inmobiliarios</li>
                <li>Ullamco veniam voluptate cupidatat sint duis.</li>
                <li>Veniam labore veniam dolor fugiat sunt tempor elit nisi duis dolor minim adipisicing aliqua.</li>
                <li>Adipisicing dolore ullamco elit laborum laboris exercitation in occaecat magna excepteur dolore officia.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Grid item container className={classes.calificacionContainer} justify="center">
          <Grid item xs={12} md={4}>
            <Calificacion />
          </Grid>
          <Grid item xs={12} md={4}>
            <Calificacion />
          </Grid>
          <Grid item xs={12} md={4}>
            <Calificacion />
          </Grid>
          <Grid item xs={12} md={4}>
            <Calificacion />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portal;
