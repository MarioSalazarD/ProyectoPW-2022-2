import Card from 'react-bootstrap/Card';
import React from "react"
import ProductoApi from '../../api/Producto';
const CardDetails = (props) => {


    return (
        <Card style={{ width: '34rem','margin-left': '7rem', 'margin-top': '15rem', height: '43rem' , backgroundColor : '#154c8b'}}>
        <Card.Body>
          <Card.Title style = {{fontSize : '28px', color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}}>{props.item.title}</Card.Title>
          <Card.Subtitle style = {{color :'white', paddingTop: '10px', paddingBottom: '10px'}} className="mb-2">{props.item.price}</Card.Subtitle>
          <Card.Subtitle style = {{fontSize : '13px', color :'white', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '7px'}}className="mb-2"><span style = {{color :'#c25be9'}}>Shipping</span> calculated at checkout</Card.Subtitle>
          <Card.Text>
          <table class="table table-bordered" style = {{border: 'gray 1px'}}>
              <tbody >
                  <tr>
                  <td style = {{fontSize : '18px' , color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}} className = 'td'> {props.item.titledetail1}</td>
                  <td style = {{fontSize : '15px' , color :'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.item.detail1}</td>
                  </tr>
                  <tr>
                  <td style = {{fontSize : '18px' , color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}}>{props.item.titledetail2}</td>
                  <td style = {{fontSize : '15px', color :'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.item.detail2}</td>
                  </tr>
                  <tr>
                  <td style = {{fontSize : '18px' , color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}}>{props.item.titledetail3}</td>
                  <td style = {{fontSize : '15px', color :'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.item.detail3}</td>
                  </tr>
                  <tr>
                  <td style = {{fontSize : '18px', color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}}>{props.item.titledetail4}</td>
                  <td style = {{fontSize : '15px', color :'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.item.detail4}</td>
                  </tr>
                  <tr>
                  <td style = {{fontSize : '18px', color :'white' , 'font-style': 'italic', 'font-family':  'fantasy'}}>{props.item.titledetail5}</td>
                  <td style = {{fontSize : '15px', color :'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.item.detail5}</td>
                  </tr>
              </tbody>
          </table>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default CardDetails;