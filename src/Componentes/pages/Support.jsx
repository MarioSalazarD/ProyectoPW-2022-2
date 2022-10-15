import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Support.css';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Support = () => {



    return(
        <Container className= "contenedor1">

           <Row>
           <NavBar></NavBar>
           </Row>

           <Row>
            <h1 className='tituloSupp'>Support Hub</h1>
           </Row>


         <Row>
           <div className='image123'>
           

           <div className='contenedorImg1'> <Navbar.Brand href="/guides"><img className='imagenGuia'  src='/img/img1.png'/></Navbar.Brand> </div>

           <div className='contenedorImg2'> <Navbar.Brand href="/faq"><img className='imagenFAQ' src='/img/img2.png'/></Navbar.Brand> </div>

           <div className='contenedorImg3'> <Navbar.Brand href="/ticket"><img className='imagenTicket' src='/img/img3.png'/></Navbar.Brand>  </div>


           </div>
           </Row>


        </Container>
    )

}


export default Support