import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './SearchBar';
import TrashCar from './TrashCar';


const NavBar = () => {
    return(
            <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/home">Icono</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/Support">Support</Nav.Link>
                            <Nav.Link href="Review">Reviews</Nav.Link>
                            <Nav.Link href="Ranking">Ranking</Nav.Link>
                        </Nav>
                        <Nav className='ml-auto'>
                        <SearchBar></SearchBar>
                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="Login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="Register">
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="Profile">
                                    Profile
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="Cart">cart</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
    )
}

export default NavBar;