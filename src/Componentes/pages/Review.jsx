import './HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import nate from '../img/nate.jpg';
import influencer1 from '../img/influencer1.jpg';
import influencer2 from '../img/influencer2.jpg';
import './Review.css'
const Review = () => {
    return(
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>

            <div className="row " >
            <div className="col-lg-3" >
              <h2 className="kind">Nate Gentile</h2>
              <div className="row" id="influencer">
              <img src={nate} alt="horse" className="influencer"  />
                VIDEO
                </div>

              </div>
            <div className="col-lg-3" >
              <h2 className="kind">Linux Tech</h2>
              <div className="row" id="influencer">
              <img src={influencer1} alt="horse" className="influencer" />

              VIDEO
                </div>


                </div>
             <div className="col-lg-3" >
              <h2 className="kind">PewDiePie</h2>
              <div className="row" id="influencer">
              <img src={influencer2} alt="horse" className="influencer" />

              VIDEO
                </div>
              </div>
              </div>

        </Container>
    )
}


export default Review;