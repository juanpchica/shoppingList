import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//External Components
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Own components
import { NavbarMenu } from "./components/Navbar";
import { Todo } from "./pages/Todo";
import { Api } from "./pages/Api";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavbarMenu />
        <Container>
          <Switch>
            <Route path='/todo' component={Todo} />
            <Route path='/api' component={Api} />
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
