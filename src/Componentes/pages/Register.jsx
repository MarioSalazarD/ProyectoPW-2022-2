import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {NavBar, Footer} from '../shared';
import './Login.css'
import UsuarioApi from '../../api/Usuario'
import { useState, useEffect } from 'react'

const Register = () => {
    const [error, setError] = useState(false)
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const usuarioRegister = async (nombre,apellido,correo,contrasena) => {
    

    const data = {
        nombre : nombre,
        apellido : apellido,
        correo : correo,
        contrasena : contrasena
    }
    const resp = await fetch(`http://localhost:3001/usuario/usuarios/post`, {
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

  const registrar = (nombre,apellido,correo,contrasena) => {
    console.log(`Nombre: ${nombre} Apellido: ${apellido} Correo: ${correo} Contraseña: ${contrasena}`)
    usuarioRegister(nombre,apellido,correo,contrasena)
}

    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
            <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Account</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name" 
              value={nombre}
              onChange = {(evt) => {setNombre(evt.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="screate" className="btn btn-primary"
            onClick={() => registrar(nombre,apellido,correo,contrasena)}>
              Create
            </button>
          </div>

        </div>
      </form>
    </div>
            </Row>
            <Row>
                    <Footer></Footer>

            </Row>
        </Container>
        
    )
}

export default Register