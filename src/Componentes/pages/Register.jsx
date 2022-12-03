import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {NavBar, Footer} from '../shared';
import './Login.css'
import UsuarioApi from '../../api/Usuario'
import { useState, useEffect } from 'react'

const Register = () => {

    const defaultRegister = {
      id: 0,
      nombre:'',
      apellido:'',
      correo:'',
      password:'',
    }
    const [register, setRegister] = useState(defaultRegister)

    useEffect(()=> {
    }, [register])

    const handleOnClick = () => {
      UsuarioApi.post(register)
        .then(response => {
          console.log({response})
          alert(response.statusText)
        })
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
              value={register.nombre}
              onChange = {e => setRegister({...register, nombre: e.currentTarget.value})}
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
            <button type="screate" className="btn btn-primary">
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