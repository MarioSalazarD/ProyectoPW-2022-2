import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import CardUserReviews from '../shared/CardUserReviews';
import { NavBar, RatingUserReviews } from '../shared';


const UserReviews = () => {

const data = [{
            id: "1",
            title: "Juan Lopez",
            description: "I completely recomend this service"
        },
        {
            id:"2",
            title: "Jhon Doe",
            description: "Great service"
        },
        {
            id:"3",
            title: "Carl Johnson",
            description: "Pc well builded and nice case quality"
        },
        

    ]

    return(
        <Container>
                <NavBar></NavBar>
                <h1 style={{color: 'white'}}>User Reviews</h1>
                <br/>
                <br/>
                <h2>Global rate</h2><RatingUserReviews/>
                <br/>
                

        <Col>
            <CardUserReviews {...data[0]} style={{'margin-bottom': '20rem'}}/>
            <CardUserReviews {...data[1]}/>
            <CardUserReviews {...data[2]}/>

        </Col>
    </Container>
    )

}


export default UserReviews;