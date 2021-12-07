import React from 'react'
import {connect} from 'react-redux'
import {Card } from 'react-bootstrap'
import { removeFromCart } from '../actions/actions'
const CartItem = (props) => {
    const {item,index}=props;
    const {product}=item;
  
  return (
<>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
    {product.price}
    </Card.Text>
     <Card.Text>
    {product.description}
    </Card.Text>
     <Card.Text>
   quantity: {item.quantity}
    </Card.Text>
       <Card.Text>
   total: { product.price* item.quantity} EGP
    </Card.Text>
<button
onClick={()=>props.removeFromCart(index)}
 className='btn btn-danger'>
    <i className='fa fa-trash'></i>
    Detele</button>
  </Card.Body>
</Card>
</>
  )
}


export default connect(null,{removeFromCart}) (CartItem);