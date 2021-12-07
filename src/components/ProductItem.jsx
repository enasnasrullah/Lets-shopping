import React from 'react'

import {Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProductItem = (props) => {
  const{product}=props;
    
  return (
<>
    <Card className='m-3' >
    
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
    {product.price} EGP
    </Card.Text>
     <Card.Text>
    {product.description}
    </Card.Text>
    
<Link className='btn btn-secondary' to={`/products/${product.id}`}>Details</Link>
  </Card.Body>
</Card>
</>
  )
}

export default ProductItem
