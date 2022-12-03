import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react"
import TrashCar from './TrashCar';
import ProductoApi from '../../api/Producto';

const CardShoppingCar = (props) =>
{

    const [ productoData, setProductoData] = useState([])

    useEffect(() => {
        handleOnLoad()
    },[])

    const handleOnLoad = async () => {
        const result = await ProductoApi.findOne();
        setProductoData(result.data)
        console.log(result);
    } 

    const handleOnRemove = async () => {
        const result = await ProductoApi.remove();
        setProductoData(result.data)
        console.log(result);
    } 


    const professorTableRows = productoData.map(item => {
        const {id, nombre, precio, descripcion } = item
        return (
          <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{descripcion}</td>
          </tr>  
        )
    })

    return(
      <Card style={{ width: '70rem', height : '8rem','margin-left' :'35rem', 'margin-bottom': '.7em' }}>
      <Row className="g-0">
      <Col md={3}>   
          <Card.Img style={{width: '7rem', 'margin-left': '5rem', height: '7rem', marginTop : '.4rem'}} variant="top" src={ imgsrc } />
      </Col> 
      <Col md={5}>
          <Card.Body>
          <Card.Title style={{ fontSize: '14px',width: '50rem', 'margin-left': '.5rem', 'marginTop': '2rem'}} > {title} </Card.Title>
 
      </Card.Body>
      </Col>
      <Col md={2}>
          <Card.Body>
          <Card.Title style={{ width: '70rem',  'margin-left': '4rem', 'marginTop': '2rem', fontSize: '13px'}} > {price} </Card.Title>
      </Card.Body>
      </Col>
      <Col md={2}>
          <Card.Body>
          <Card.Title style={{marginLeft :'3rem', marginTop: '1.5rem'}}> <Button variant="light" ><TrashCar></TrashCar></Button> </Card.Title>
        </Card.Body>
      </Col>
      </Row>
    </Card>
    );
}

export default CardShoppingCar