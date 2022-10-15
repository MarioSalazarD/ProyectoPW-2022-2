import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
import Nav from 'react-bootstrap/Nav';






const ProductCard = (props) => {
    const { path1, path2, oferta, texto} = props;
    return (
        <Card href="#" style={{ display: 'inline-block' ,height: '250px' ,width: '220px', 'margin-top': '10%',
         'margin-left':'10%', 'margin-right':'0%', backgroundColor: 'hsl(242, 41%, 24%)', border: 'none'}}>
            <svg  width="200" height="200" fill="currentColor" color='grey' 
            class="bi bi-controller" viewBox="-3.5 -2 21 21" className='controler'>
                 <path d={path1}/>
                 <path d={path2}/>
            </svg>
      <Card.Body>
        <Card.Title >
            <Nav.Link href={oferta} style={{'font-size': '25px', 'textAlign': 'center', color: 'grey', 'margin-top': '-15px'}}>{texto}</Nav.Link>

            </Card.Title>
        
      </Card.Body>
    </Card>
    )
}

export default ProductCard