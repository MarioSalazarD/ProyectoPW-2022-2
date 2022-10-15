import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../shared/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DdTitulo } from '../shared';
import './Building.css'
import logo1 from '../img/intelcore.jpg'



const Building = () =>{
  return(
    <Container>
      <Row>
        <NavBar></NavBar>
      </Row>
      <Row>
        <h1 className='tituloSupp'>Armado para Conocedores</h1>
      </Row>
      <Row className='fila'>
        <Col>
          <Row>
            <DdTitulo name={"Eliga el Procesador:"}></DdTitulo>
          </Row>
          <Row>
            <Col><img className='img2' src='../img/intelcore.jpg'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">Intel</option>
                <option value="2">AMD</option>
                <option value="3">Ryzen</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <DdTitulo name={"Eliga la Memoria RAM:"}></DdTitulo>
          <Row>
            <Col><img className='img2' src='../img/memoriaRAM.png'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">RAM DDR4 8GB</option>
                <option value="2">RAM DDR4 16GB</option>
                <option value="3">RAM DDR4 32GB</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <DdTitulo name={"Eliga la Tarjeta Gráfica:"}></DdTitulo>
          <Row>
            <Col><img className='img2' src='../img/nvidia3.jpg'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">NVIDIA RTX 3060</option>
                <option value="2">RADEON RX5700 XT</option>
                <option value="3">RADEON RX580</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='fila'>
        <Col>
          <DdTitulo name={"Eliga la Fuente de Poder:"}></DdTitulo>
          <Row>
            <Col><img className='img2' src='../img/fuente.jpg'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">500W 80 PLUS BRONZE</option>
                <option value="2">750W 80 PLUS SILVER</option>
                <option value="3">1000W 80 PLUS GOLD</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <DdTitulo name={"Eliga el Sistema Operativo:"}></DdTitulo>
          <Row>
            <Col><img className='img2' src='../img/w10.png'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">Windows 10</option>
                <option value="2">Windows 11</option>
                <option value="3">Ubuntu</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <DdTitulo name={"Eliga la Refrigeración:"}></DdTitulo>
          <Row>
            <Col><img className='img2' src='../img/refri.jpg'/></Col>
            <Col>
              <Form.Select>
                <option>Escoga el Producto</option>
                <option value="1">Refrigeración por Aire</option>
                <option value="2">Refrigeración Líquida</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Button href="/checkout" className='btnLarge' size="sm" variant="primary">Confirmar Armado</Button>
      </Row>
    </Container>
  )
}

export default Building;