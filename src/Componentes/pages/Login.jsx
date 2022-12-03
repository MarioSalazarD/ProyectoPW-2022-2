import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';

const Login_URL = '/auth';

const Login = () => {

    const{ setAuth } = useContext(AuthContext);
    const corrRef = useRef();
    const errRef = useRef();

    const [correo, setCorreo] = useState('');
    const [password, setPasword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
      corrRef.current.focus();
    },{})

    useEffect(()=>{
      setErrMsg('');
    },[correo, password])

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post(Login_URL, JSON.stringify({correo, password}),
        {
          header: { 'Content/type':'application/json'},
          withCredentials: true
        }
        );
        console.log(JSON.stringify(response?.data));
        const accessToken =response?.data?.accessToken;
        setAuth({correo, password, accessToken})
        setCorreo('');
        setPasword('');
        setSuccess(true)
      }catch (err){
        if(!err?.response){
          setErrMsg('no server response')
        }else if (err.response?.status === 400) {
          setErrMsg('Missing information')
        }
        errRef.current.focus();
      }

      
    }

    return(
      <>
        {success ?(
                <Container>
                  <h1>Estas Logeado</h1>
                  <br />
                  <p>
                    <a href="/">ir a Inicio</a>
                  </p>
                </Container>
        ):(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
              <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
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
              ref={corrRef}
              autoComplete='off'
              onChange={(e)=>setCorreo(e.target.value)}
              value={correo}

            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              id = "password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange = {(e)=>setPasword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
            >
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
        </Container>)}</>
        
    )
}

export default Login