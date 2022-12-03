import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Ticket.css';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'




const Ticket = () => {
  const [error, setError] = useState(false)
  const [correo, setCorreo] = useState("")
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [asunto, setAsunto] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const usuarioRegister = async (correo,nombre, telefono, asunto, descripcion )  => {
  

  const data = {
      nombre : nombre,
      telefono : telefono,
      correo : correo,
      asunto : asunto,
      descripcion : descripcion
  }
  const resp = await fetch(`http://localhost:3001/reporte/reporte/post`, {
      method : "POST",
      body : JSON.stringify(data),
      headers : {
          "Content-Type" : "application/json"
      }
  })
  const dataResp = await resp.json()
  if(dataResp.error !== ""){
      console.error(dataResp.error)
      setError(true)
  }else{
      setError(false)
  }
}
const registrar = (correo,nombre, telefono, asunto, descripcion) => {
  console.log(`Correo: ${correo} Nombre: ${nombre} Telefono: ${telefono} Asunto: ${asunto} Descripcion: ${descripcion}`)
  usuarioRegister(correo,nombre, telefono, asunto, descripcion)
}

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
              value={correo}
              onChange = {(evt) => {setCorreo(evt.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter name"
              value={nombre}
              onChange = {(evt) => {setNombre(evt.target.value)}}
            />
            <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter phone number"
              value={telefono}
              onChange = {(evt) => {setTelefono(evt.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Subject</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter subject of issue"
              value={asunto}
              onChange = {(evt) => {setAsunto(evt.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Describe your situation"
              value={descripcion}
              onChange = {(evt) => {setDescripcion(evt.target.value)}}
            />
          </div>
          </div>
          <Row className="botones">
          <button type="screate" className="btn btn-primary"
            onClick={() => registrar(correo,nombre, telefono, asunto, descripcion)}>
              Submit
            </button>
           </Row>
          
        </div>
      </form>
    </div>


            </Row>
        </Container>
    )
}

export default Ticket

