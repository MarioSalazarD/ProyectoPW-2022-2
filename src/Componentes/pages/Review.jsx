import './HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';



const Review = () => {
    return(
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            
        </Container>
    )
}


export default Review;