import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Fondo02.css'

import NavBar from "./OtherElements/NavBar";
import Card from 'react-bootstrap/Card';

import Botones from './OtherElements/Botones';

const Offer03 = () => {
    return (
        <>
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                      <h1 className='letra'>Your optimized build!</h1> 
                      
                      <Col className='sep'>
                      <Button href="/recomend" 
                      style={{'background-color':'grey', border: 'none', color: 'black',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Back</Button>
                      <div className='divider'/>
                      <Button href="#"
                      style={{'background-color':'#571AA1', border: 'none', color: 'white',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Next</Button>
                      
                      </Col>
                      <Col >
                      <h1 style={{width: '120px', 'fontSize': '25px', 'margin-top': '10%', 'margin-left':'51%'}}>Components</h1>
                      <img src="https://freepikpsd.com/file/2019/11/gaming-pc-transparent-Transparent-Images.png" style={{height:'460px' ,width: '400px', 'margin-top': '-300px', marginLeft: '80px'}}></img>
                      <Card style={{ color:'grey',display: 'inline-block' ,height: '250px' ,width: '475px', 'margin-top': '2%', 'margin-left':'7%',backgroundColor: 'hsl(242, 41%, 24%)', border: 'none'}}>
                      <table style={{height: '250px' , border:'none'}}>
                        <tbody>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.cyberpuerta.mx/img/product/L/CP-INTEL-BX80684I59400F-4.jpg" style={{width: '65px', height:'58px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Intel Core i5 </td>
                                <td style={{width: '50px'}}>$159</td>
                                <td><img src="https://i.linio.com/p/702f0f15ec2b3e12ec43c1ab0a3b972c-product.jpg" style={{width: '65px', height:'55px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>ANVIDIA GTX 1080 </td>
                                <td style={{width: '50px'}}>$470</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.worten.es/i/92d90e4122b596a50229e748b881c5c13920f02e" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>32gb ram    </td>
                                <td style={{width: '50px'}}>$189</td>
                                <td><img src="https://www.pcworld.com/wp-content/uploads/2021/09/wd-black-sn750-nvme-gaming-ssd-100786895-orig-2.jpg?quality=50&strip=all&w=1024" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>1TB MVME    </td>
                                <td style={{width: '50px'}}>$99</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.adcomputers.com.pe/wp-content/uploads/2021/12/RR-212S-20PC-R1.jpg" style={{width: '65px', height:'58px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Master Cooler 512 </td>
                                <td style={{width: '50px'}}>$99</td>
                                <td><img src="https://http2.mlstatic.com/D_NQ_NP_897827-MPE43535788085_092020-O.jpg" style={{width: '65px',height:'54px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Wireless </td>
                                <td style={{width: '50px'}}>$29</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                             <td><img src="https://www.muycomputer.com/wp-content/uploads/2020/10/Windows10_20H2-1000x600.jpg" style={{width: '65px', height:'52px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Windows 10    </td>
                                <td style={{width: '50px'}}>$120</td>
                                <td><img src="https://brevardcooling.com/files/services/warranty-info_2197.jpg" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Warranty    </td>
                                <td style={{width: '50px'}}>$1</td>
                            </tr>   
                        </tbody>
                       </table>
                       </Card>

                      </Col>

                      <Card style={{ color:'grey',display: 'inline-block' ,height: '100px' ,width: '300px', 'margin-top': '1%', 'margin-left':'120px',backgroundColor: 'hsl(242, 41%, 24%)', border: 'none'}}>
                        <table  style={{height: '100px' , border:'none'}}>
                            <tbody>
                                <tr>
                                    <td style={{width: '140px', 'fontSize': '15px', textAlign:'center'}}>Components Price</td>
                                    <td style={{width: '100px','fontSize': '15px', textAlign:'right'}}>Build Free</td>
                                </tr>
                                <tr>
                                    <td style={{'fontSize': '22px', textAlign:'center'}}>$1166</td>
                                    <td style={{'fontSize': '22px', textAlign:'center'}}>$99</td>
                                </tr>
                            </tbody>
                        </table>
                      </Card>

                </Col>
            </Row>
            
        </Container>
        </>)



}

export default Offer03;