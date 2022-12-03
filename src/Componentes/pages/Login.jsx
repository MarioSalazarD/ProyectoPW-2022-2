import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const usuarioLogin = async (correo,password) => {
  const data = {
    correo : correo,
    password: password
  }

  const resp = await fetch(`http://localhost:3001/usuario/login"`, {
        method : "GET",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const dataResp = await resp.json()
    if(dataResp.error === ""){
        navigate("/")
    }else{
        navigate("/Login")
    }
  }

  const Logining = (correo,password) => {
    console.log(`Correo: ${correo} Contraseña: ${password}`)
    usuarioLogin(correo, password)
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
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={correo}
              onChange = {(evt) => {setCorreo(evt.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange = {(evt) => {setPassword(evt.target.value)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
            onClick={() => Logining(correo,password)}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a> <br />
            Or make a <a href="/register">New Account</a> instead
          </p>
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

export default Login