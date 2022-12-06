import Base from './base'
import axios from 'axios'

const sendEmail = async(correo) => {
    return await axios.post(`http://localhost:3001/email/send`);
}

const UsuarioApi = { sendEmail}

export default UsuarioApi;