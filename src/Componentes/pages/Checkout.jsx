import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import CardRanking from '../shared/CardRanking';
import { NavBar } from '../shared';
import Button from 'react-bootstrap/Button';



const Checkout = () => {

const compra = [{
            id: "1",
            title: "Prcesador Intel",
            srcimg: "img/intelcore.jpg",
            description: "$150"
        },
        {
            id:"2",
            title: "RAM DDR4 16GB",
            srcimg: "img/memoriaRAM.PNG",
            description: "$50"
        },
        {
            id:"3",
            title: "NVIDIA RTX 3060",
            srcimg: "img/nvidia3.jpg",
            description: "$400"
        },
        {
            id:"4",
            title: "750W 80 PLUS SILVER",
            srcimg: "img/fuente.jpg",
            description: "$150"
        },
        {
          id:"5",
          title: "Windows 10",
          srcimg: "img/w10.png",
          description: "$18"
      },
      {
        id:"6",
        title: "Refrigeración Líquida",
        srcimg: "img/refri.jpg",
        description: "$149"
    },
    ]

    return(
        <Container>
                <NavBar></NavBar>
                <h1 className='tituloSupp'>Realizar Compra</h1>
                <br/>
                <br/>
        <Col>
            <CardRanking {...compra[0]}/>
            <CardRanking {...compra[1]}/>
            <CardRanking {...compra[2]}/>
            <CardRanking {...compra[3]}/>
            <CardRanking {...compra[4]}/>
            <CardRanking {...compra[5]}/>

        </Col>
        <Row>
        <Button href="/checkout" className='btnLarge' size="sm" variant="primary">Pagar</Button>
      </Row>
    </Container>
    )

}


export default Checkout;