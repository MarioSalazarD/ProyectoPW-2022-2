import Base from './base'

const endpoint = '/usuario';

const create = async (request) => {
    return await Base.post('http://localhost:3001/usuario/Usuarios/post',request);
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

const UsuarioApi = { create, findAll, findOne, update, remove }

export default UsuarioApi;