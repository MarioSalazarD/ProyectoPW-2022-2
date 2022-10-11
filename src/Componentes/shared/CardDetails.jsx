import Card from 'react-bootstrap/Card';

const CardDetails = () => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>NVIDIA GEFORCE GTX 1650 4GB</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Precio: $229</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Shipping calculated at checkout</Card.Subtitle>
          <Card.Text>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td>CHIPSET MANUFACTURER</td>
                    <td>NVIDIA</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>GPU</td>
                    <td>GEFORCE GTX 1650</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>CORE CLOCK</td>
                    <td>1530 MHz</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>BOOST CLOCK</td>
                    <td>OC Mode: 1800 MHz
                        Gaming Mode 
                        (Default): 1770MHz
                    </td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>CUDA CORES</td>
                    <td>1280</td>
                    </tr>
                </tbody>
            </table>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default CardDetails;