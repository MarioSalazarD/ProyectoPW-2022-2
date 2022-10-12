import Card from 'react-bootstrap/Card';
import React from "react"
const CardDetails = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.item.price}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Shipping calculated at checkout</Card.Subtitle>
          <Card.Text>
          <table class="table table-bordered">
              <tbody>
                  <tr>
                  <td>{props.item.titledetail1}</td>
                  <td>{props.item.detail1}</td>
                  </tr>
                  <tr>
                  <td>{props.item.titledetail2}</td>
                  <td>{props.item.detail2}</td>
                  </tr>
                  <tr>
                  <td>{props.item.titledetail3}</td>
                  <td>{props.item.detail3}</td>
                  </tr>
                  <tr>
                  <td>{props.item.titledetail4}</td>
                  <td>{props.item.detail4}</td>
                  </tr>
                  <tr>
                  <td>{props.item.titledetail5}</td>
                  <td>{props.item.detail5}</td>
                  </tr>
              </tbody>
          </table>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default CardDetails;