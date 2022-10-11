import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return(
        <Container>
            <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/home">Icono</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#Support">Support</Nav.Link>
                            <Nav.Link href="Review">Reviews</Nav.Link>
                            <Nav.Link href="#Ranking">Ranking</Nav.Link>
                        </Nav>
                        <Nav className="text end">
                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="Login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="Register">
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="Cart">cart</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
        </Container>
    )
}

export default NavBar;