import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReviewCard from '../shared/ReviewCard';
import { NavBar } from '../shared';


const Review = () => {

const data = [{
            id: "1",
            title: "Nate Gentile",
            srcvid: "https://www.youtube.com/embed/5O_v6QrU9Kk",
            youtube: "https://www.youtube.com/c/NateGentile7",
            description: "Compré un excelente componente, de gran calidad y a un bajo precio"
        },
        {
            id:"2",
            title: "Linux Tech",
            srcvid: "https://www.youtube.com/embed/ZbZ32mqmsrg",
            youtube: "https://www.youtube.com/c/LinusTechTips",
            description: "This computer is absolutely insane! Once again if your want to check out this brand new Redux gaming PC- It's absolute super computer. Highly, highly, recommend it."
        },
        {
            id:"3",
            title: "PewDiePie",
            srcvid: "https://www.youtube.com/embed/Ah5MYGQBYRo",
            youtube: "https://www.youtube.com/user/PewDiePie",
            description: "You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!"
        }]

    return(
        <Container>
                <NavBar></NavBar>
                <h1>Influencers</h1>
                <br/>
                <br/>
        <Row>
            <ReviewCard {...data[0]}/>
            <ReviewCard {...data[1]}/>
            <ReviewCard {...data[2]}/>

        </Row>
    </Container>
    )

}


export default Review;