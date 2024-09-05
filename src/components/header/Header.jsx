import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png"
import headerstyle from "./Header.module.css"

const Header=()=>{
    return <Container className={headerstyle.Container}>
<Image src={logo} width={"200px"} />
<h1 className={headerstyle.title}>Football Legends</h1>
    </Container>
    
}

export default Header;