import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import headerStyle from "./Header.module.css"

//import {Container,Image} from "react-bootstrap" //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={"200px"} /><br/>
      <h1 className={`${headerStyle.title} my-2`}>Football Legends</h1>
    </Container>
  );
};
export default Header;