import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import User from "../../api/Usuario.js"


const Login = () => {
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const signUpOnclick = () => {
    navigate("/signup")
  }

  const logInOnclick = async () => {
    if (correo !== "" && password !== "") {
        const user = await User.login(correo,password);
        if(!user){
            navigate("/login")
        }else{
            sessionStorage.setItem("user_id", user.data[0].id)
            navigate("/")
        }
        
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  }
    
    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
            <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label htmlFor='correo'>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name = "correo"
              value={correo}
              onChange={(evt) => setCorreo(evt.target.value)}

            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              id = "password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
            onClick={logInOnclick}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a> <br />
            Or make a <a href="/register" onClick={signUpOnclick}>New Account</a> instead
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