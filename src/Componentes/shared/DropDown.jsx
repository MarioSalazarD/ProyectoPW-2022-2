import Form from 'react-bootstrap/Form';

const DropDown = (props) =>{
  return(
    <Form.Select aria-label="Default select example">
      <option>Escoga el Producto</option>
      <option>{props.name}</option>
    </Form.Select>
  )
}

export default DropDown;