import Container from "react-bootstrap/Container"
import Header from "./componets/header/Header"
import LegendContainer from "./components/legends/LegendContainer";
function App() {
  return (
    // <div className="container">
    //   Hello React
    // </div>
    <Container className="text-center my-5">
      <Header />
      <LegendContainer />
    </Container>
  );
}
export default App;