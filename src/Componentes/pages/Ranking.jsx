import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import CardRanking from '../shared/CardRanking';
import { NavBar } from '../shared';
import headset from '../img/headset.jpg';
import mousekeyboard from '../img/mousekeyboard.jpg';
import standardmousepad from '../img/standardmousepad.jpg';
import XLmousepad from '../img/XLmousepad.jpg';

const Ranking = () => {

const data = [{
            id: "1",
            title: "Headset",
            srcimg: "headset.jpg",
            description: "$25"
        },
        {
            id:"2",
            title: "Mouse & keyboards",
            srcimg: "mouse&keyboard.jpg",
            description: "$39"
        },
        {
            id:"3",
            title: "Standard mouse pad",
            srcimg: "standardmousepad.jpg",
            description: "$19"
        },
        {
            id:"4",
            title: "XL mouse pad",
            srcimg: "XLmousepad.jpg",
            description: "$29"
        },
    ]

    return(
        <Container>
                <NavBar></NavBar>
                <h1>Ranking best sellers periferics</h1>
                <br/>
                <br/>
        <Col>
            <CardRanking {...data[0]}/>
            <CardRanking {...data[1]}/>
            <CardRanking {...data[2]}/>
            <CardRanking {...data[2]}/>

        </Col>
    </Container>
    )

}


export default Ranking;