import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Ticket.css';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';




const Ticket = () => {

    return (

        <Container>

            <Row>
                <NavBar></NavBar>
            </Row>

            <Row>
                <h1 className='tituloTicket'>Submit a Request</h1>
            </Row>

            <Row>
            <div className="contenedorTicket">
      <form className="forma">
        <div className="Auth-form-content">
          
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter name"
            />
            <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group mt-3">
            <label>Subject</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter subject of issue"
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Describe your situation"
            />
          </div>
          </div>
          <Row className="botones">
          <Button className="botonSubmit" href="#">Submit</Button>
           </Row>
          
        </div>
      </form>
    </div>


            </Row>
        </Container>
    )
}

export default Ticket

