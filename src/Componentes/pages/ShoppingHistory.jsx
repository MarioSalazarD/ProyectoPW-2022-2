import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import CardShoppingHistory from '../shared/CardShoppingHistory';
import { NavBar } from '../shared';
import CardMenuSH from '../shared/CardMenuSH';


const ShoppingHistory = () => {

    const data = [{
        id: "1",
        title: "Keyboard & mouse bundle",
        srcimg: "img/mousekeyboard.jpg",
        description: "$39",
        date1: "10/12/2022"
    },
    {
        id: "2",
        title: "INTEL CORE I7-12700F 12-CORE",
        srcimg: "img/intelcore.jpg",
        description: "$359",
        date1: "10/12/2022"
    },
    {
        id: "3",
        title: "NVIDIA GEFORCE RTX 3070 8GB (VR READY)",
        srcimg: "img/Nvidia.jpg",
        description: "$679",
        date1: "10/12/2022"
    },
    {
        id: "4",
        title: "1 TB NVME M.2",
        srcimg: "img/discoduro.jpg",
        description: "$99",
        date1: "10/12/2022"
    },
    {
        id: "5",
        title: "COOLER MASTER TD500 RGB",
        srcimg: "img/coolermaster.jpg",
        description: "$99",
        date1: "10/12/2022"
    },
    {
        id: "6",
        title: "BUILD + SETUP + TESTING + WARRANTY",
        srcimg: "img/mando.jpg",
        description: "$99",
        date1: "10/12/2022"
    },
]

    const data2 = [{
        id: "1",
        title: "Order History",
        href: "/Shoppinghistory"
    },
    {
        id: "2",
        title: "Profile Info",
        href:"/Profile"
    },
    {
        id: "3",
        title: "Log Out",
        href:"/Home"
    },

]



    

    return(
        <Container>
                <NavBar></NavBar>
                
        <Col>
            <Col>
                <CardShoppingHistory {...data[0]}/>
                <CardShoppingHistory {...data[1]}/>
                <CardShoppingHistory {...data[2]}/>
                <CardShoppingHistory {...data[3]}/>
                <CardShoppingHistory {...data[4]}/>
                <CardShoppingHistory {...data[5]}/>

            </Col>
            <Row>
                <CardMenuSH {...data2[0]}/>
                <CardMenuSH {...data2[1]}/>
                <CardMenuSH {...data2[2]}/>
            </Row>
        </Col>
    </Container>
    )

}


export default ShoppingHistory;