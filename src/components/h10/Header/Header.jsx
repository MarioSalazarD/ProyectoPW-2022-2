import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
return (
    <Container>
        <Row xs={1}>
            <Col xs={6}>
            <h1>
                <i class="fa fa-gamepad" aria-hidden="true"></i>
                &nbsp;Playstation Store</h1>
            </Col >
            <Col xs={6} className="justify-content-md-right">
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Logout</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col >
        </Row>
    </Container>
)

}

export default Header;