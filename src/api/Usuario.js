import Base from './base'
import axios from 'axios'

const endpoint = '/usuario';

const create = async (request) => {
    return await Base.post(endpoint,request);
}

const findAll = async() => {
    return await Base.get(endpoint);
}

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.get(newEndpoint);
}

const update = async(request) => {
    return await Base.put(endpoint,request);
}

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.remove(newEndpoint);
}

const login = async (email, password) => {
    return await axios.get(`https://basededatosfinal-production.up.railway.app/usuario/${email}/${password}`);
}

const UsuarioApi = { create, findAll, findOne, update, remove, login }

export default UsuarioApi;