import ReactDOM from 'react-dom/client';
import BsAlert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductCard from './Offers(h11)/OtherElements/Card';
import './Fondo.css'

import NavBar from "./Offers(h11)/OtherElements/NavBar";
import Botones from './Offers(h11)/OtherElements/Botones';


const Rankinpc = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <>
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                      <h1 style={{ 'font-size': '34px', color: 'grey', width:'400px' , 'margin-top': '50px', 'margin-left':'40px'}}>Rankin best sellers builds</h1>
                      <Col>
                         <table  style={{fontSize:'20px', border:'none', color:'grey',display: 'inline-block' ,height: '75px' ,width: '560px', 'margin-top': '0%', 'margin-left':'100px',backgroundColor: 'hsl(242, 41%, 24%)'}}>
                            <tbody>
                                <tr>
                                    <td><img src="https://www.pngplay.com/wp-content/uploads/12/LED-CPU-Cabinet-No-Background-Clip-Art.png" style={{width: '75px'}}/></td>
                                    <td style={{width: '140px', textAlign:'center'}}>PC Gamer</td>
                                    <td style={{width:'250px', textAlign:'right', fontSize:'24px'}}>$1576</td>
                                    
                                </tr>
                                
                            </tbody>
                         </table>
                         <BsAlert variant="success" show={show} style={{color: 'grey', width:'450px' , 'margin-top': '0px', 'margin-left':'100px'}}>
                         
                         <table style={{height: '250px' , border:'none'}}>
                          <tbody>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://i.blogs.es/4af7cf/corei9-2/1366_2000.jpg" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Intel Core i8 </td>
                                <td style={{width: '50px'}}>$489</td>
                                <td><img src="https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/resultado-de-imagen-para-antivirus.png" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Antivirus NVIDIA.1 </td>
                                <td style={{width: '50px'}}>$550</td>
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
                           <hr />
                          <div className="d-flex justify-content-end">
                           <Button onClick={() => setShow(false)} variant="outline-success">
                               Nice PC!
                            </Button>
                          </div>
                           </BsAlert>
                          {!show && <Button onClick={() => setShow(true)} style={{'background-color':'#571AA1', border: 'none', color: 'white',
                           padding: '5px 10px', 'text-align': 'center', 'text-decoration': 'none',
                          display: 'inline-block', 'font-size': '12px', marginLeft:'-70px', marginTop:'-62px'}}>view</Button>}
                       </Col>






                       <Col>
                         <table  style={{fontSize:'20px', border:'none', color:'grey',display: 'inline-block' ,height: '75px' ,width: '560px', 'margin-top': '0%', 'margin-left':'100px',backgroundColor: 'hsl(242, 41%, 24%)'}}>
                            <tbody>
                                <tr>
                                    <td><img src="https://www.pngplay.com/wp-content/uploads/12/LED-CPU-Cabinet-No-Background-Clip-Art.png" style={{width: '75px'}}/></td>
                                    <td style={{width: '140px', textAlign:'center'}}>LexCorp Build</td>
                                    <td style={{width:'250px', textAlign:'right', fontSize:'24px'}}>$2275</td>
                                    
                                </tr>
                                
                            </tbody>
                         </table>
                         <BsAlert variant="success" show={show2} style={{color: 'grey', width:'450px' , 'margin-top': '0px', 'margin-left':'100px'}}>
                         
                         <table style={{height: '250px' , border:'none'}}>
                          <tbody>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://hardzone.es/app/uploads-hardzone.es/2020/10/Alder-Lake-S-Intel-Gen-12.jpg?x=480&y=375&quality=40" style={{width: '65px', height:'55px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Intel Core i9 </td>
                                <td style={{width: '50px'}}>$599</td>
                                <td><img src="https://thumbs.dreamstime.com/b/el-icono-y-rojo-del-escudo-de-la-protecci%C3%B3n-seguridad-antivirus-empa%C3%B1aron-fondo-115804050.jpg" style={{width: '65px', height:'55px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Antivirus Megumin </td>
                                <td style={{width: '50px'}}>$750</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                            <td><img src="https://www.worten.es/i/92d90e4122b596a50229e748b881c5c13920f02e" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>64gb ram    </td>
                                <td style={{width: '50px'}}>$499</td>   
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
                                <td style={{width: '120px', 'fontSize': '14px'}}>Windows 12    </td>
                                <td style={{width: '50px'}}>$200</td>
                                <td><img src="https://brevardcooling.com/files/services/warranty-info_2197.jpg" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Ilimited Warranty  </td>
                                <td style={{width: '50px'}}>Free</td>
                            </tr>   
                           </tbody>
                          </table>
                           <hr />
                          <div className="d-flex justify-content-end">
                           <Button onClick={() => setShow2(false)} variant="outline-success">
                               Nice PC!
                            </Button>
                          </div>
                           </BsAlert>
                          {!show2 && <Button onClick={() => setShow2(true)} style={{'background-color':'#571AA1', border: 'none', color: 'white',
                           padding: '5px 10px', 'text-align': 'center', 'text-decoration': 'none',
                          display: 'inline-block', 'font-size': '12px', marginLeft:'-70px', marginTop:'-62px'}}>view</Button>}
                       </Col>





                       <Col>
                         <table  style={{fontSize:'20px', border:'none', color:'grey',display: 'inline-block' ,height: '75px' ,width: '560px', 'margin-top': '0%', 'margin-left':'100px',backgroundColor: 'hsl(242, 41%, 24%)'}}>
                            <tbody>
                                <tr>
                                    <td><img src="https://www.pngplay.com/wp-content/uploads/12/LED-CPU-Cabinet-No-Background-Clip-Art.png" style={{width: '75px'}}/></td>
                                    <td style={{width: '200px', textAlign:'center'}}>Render point Build</td>
                                    <td style={{width:'190px', textAlign:'right', fontSize:'24px'}}>$1436</td>
                                    
                                </tr>
                                
                            </tbody>
                         </table>
                         <BsAlert variant="success" show={show3} style={{color: 'grey', width:'450px' , 'margin-top': '0px', 'margin-left':'100px'}}>
                         <table style={{height: '250px' , border:'none'}}>
                        <tbody>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://i.blogs.es/4af7cf/corei9-2/1366_2000.jpg" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Intel Core i8 </td>
                                <td style={{width: '50px'}}>$489</td>
                                <td><img src="https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/resultado-de-imagen-para-antivirus.png" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Antivirus Panda </td>
                                <td style={{width: '50px'}}>$150</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.worten.es/i/92d90e4122b596a50229e748b881c5c13920f02e" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>64gb ram    </td>
                                <td style={{width: '50px'}}>$499</td>
                                <td><img src="https://www.pcworld.com/wp-content/uploads/2021/09/wd-black-sn750-nvme-gaming-ssd-100786895-orig-2.jpg?quality=50&strip=all&w=1024" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>500GB MVME    </td>
                                <td style={{width: '50px'}}>$49</td>
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
                           <hr />
                          <div className="d-flex justify-content-end">
                           <Button onClick={() => setShow3(false)} variant="outline-success">
                               Nice PC!
                            </Button>
                          </div>
                           </BsAlert>
                          {!show3 && <Button onClick={() => setShow3(true)} style={{'background-color':'#571AA1', border: 'none', color: 'white',
                           padding: '5px 10px', 'text-align': 'center', 'text-decoration': 'none',
                          display: 'inline-block', 'font-size': '12px', marginLeft:'-70px', marginTop:'-62px'}}>view</Button>}
                       </Col>
                       



                       <Col>
                         <table  style={{fontSize:'20px', border:'none', color:'grey',display: 'inline-block' ,height: '75px' ,width: '560px', 'margin-top': '0%', 'margin-left':'100px',backgroundColor: 'hsl(242, 41%, 24%)'}}>
                            <tbody>
                                <tr>
                                    <td><img src="https://www.pngplay.com/wp-content/uploads/12/LED-CPU-Cabinet-No-Background-Clip-Art.png" style={{width: '75px'}}/></td>
                                    <td style={{width: '140px', textAlign:'center'}}>Basic model</td>
                                    <td style={{width:'250px', textAlign:'right', fontSize:'24px'}}>$706</td>
                                    
                                </tr>
                                
                            </tbody>
                         </table>
                         <BsAlert variant="success" show={show4} style={{color: 'grey', width:'450px' , 'margin-top': '0px', 'margin-left':'100px'}}>
                         
                         <table style={{height: '250px' , border:'none'}}>
                        <tbody>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.cyberpuerta.mx/img/product/L/CP-INTEL-BX80684I59400F-4.jpg" style={{width: '65px', height:'58px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Intel Core i5 </td>
                                <td style={{width: '50px'}}>$159</td>
                                <td><img src="https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/resultado-de-imagen-para-antivirus.png" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>Antivirus Panda </td>
                                <td style={{width: '50px'}}>$150</td>
                            </tr>
                            <tr style={{ border: '1px solid'}}>
                                <td><img src="https://www.worten.es/i/92d90e4122b596a50229e748b881c5c13920f02e" style={{width: '65px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>16gb ram    </td>
                                <td style={{width: '50px'}}>$99</td>
                                <td><img src="https://www.pcworld.com/wp-content/uploads/2021/09/wd-black-sn750-nvme-gaming-ssd-100786895-orig-2.jpg?quality=50&strip=all&w=1024" style={{width: '65px', height:'48px'}}/></td>
                                <td style={{width: '120px', 'fontSize': '14px'}}>500GB MVME    </td>
                                <td style={{width: '50px'}}>$49</td>
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
                           <hr />
                          <div className="d-flex justify-content-end">
                           <Button onClick={() => setShow4(false)} variant="outline-success">
                               Nice PC!
                            </Button>
                          </div>
                           </BsAlert>
                          {!show4 && <Button onClick={() => setShow4(true)} style={{'background-color':'#571AA1', border: 'none', color: 'white',
                           padding: '5px 10px', 'text-align': 'center', 'text-decoration': 'none',
                          display: 'inline-block', 'font-size': '12px', marginLeft:'-70px', marginTop:'-62px'}}>view</Button>}
                       </Col>
                </Col>  
            </Row>
            
        </Container>
        </>)



}

export default Rankinpc;