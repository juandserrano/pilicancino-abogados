import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import QuienesSomos from "./components/QuienesSomos";
import Portal from "./components/Portal";
import Contacto from "./components/Contacto";
import Servicios from "./components/Servicios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "30px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Navbar />
        <div className={classes.main}>
          <Switch>
            <Route exact path="/" component={Portal} />
            <Route path="/about" component={QuienesSomos} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/servicios" component={Servicios} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
