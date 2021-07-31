import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//External Components
import Container from "react-bootstrap/Container";

//Own components
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
