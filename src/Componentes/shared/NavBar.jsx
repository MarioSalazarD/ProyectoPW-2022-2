import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return(
        <Container>
            <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Icono</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#Support">Support</Nav.Link>
                            <Nav.Link href="#Reviews">Reviews</Nav.Link>
                            <Nav.Link href="#Ranking">Ranking</Nav.Link>
                        </Nav>
                        <Nav className="text end">
                            <Nav.Link href="#Account">Account</Nav.Link>
                            <Nav.Link href="#Account">cart</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
        </Container>
    )
}

export default NavBar;