import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import CardRanking from '../shared/CardRanking';
import { NavBar } from '../shared';
import Button from 'react-bootstrap/Button';


const Ranking = () => {

const data = [{
            id: "1",
            title: "Headset",
            srcimg: "img/headset.jpg",
            description: "$25"
        },
        {
            id:"2",
            title: "Mouse & keyboards",
            srcimg: "img/mousekeyboard.jpg",
            description: "$39"
        },
        {
            id:"3",
            title: "Standard mouse pad",
            srcimg: "img/standardmousepad.jpg",
            description: "$19"
        },
        {
            id:"4",
            title: "XL mouse pad",
            srcimg: "img/XLmousepad.jpg",
            description: "$29"
        },
    ]

    return(
        <Container>
                <NavBar></NavBar>
                <h1 style={{color:'white'}}>Ranking best sellers periferics</h1>
                <br/>
                <br/>
        <Col>
             <Button href="/ranking-pc" 
                      style={{'background-color':'white', border: 'none', color: 'black',
                      padding: '8px 25px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px', marginTop:'-180px', marginLeft:'900px'}}>
                PC's
            </Button>
                      
                      
            <CardRanking {...data[0]}/>
            <CardRanking {...data[1]}/>
            <CardRanking {...data[2]}/>
            <CardRanking {...data[3]}/>

        </Col>
    </Container>
    )

}


export default Ranking;