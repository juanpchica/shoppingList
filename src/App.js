import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//External Components
import Container from "react-bootstrap/Container";

//Own components
import { NavbarMenu } from "./components/Navbar";
function App() {
  return (
    <React.Fragment>
      <NavbarMenu />
      <Container></Container>
    </React.Fragment>
  );
}

export default App;
