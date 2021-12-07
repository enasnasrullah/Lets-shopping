import React from 'react'
import { Link } from 'react-router-dom'

import {  Navbar,Nav , Container} from 'react-bootstrap'
import CartIcon from '../components/CartIcon'
 const Header = () => {
    return  <>
<Navbar bg="light" expand="lg">
  <Container>
    <h1>Shopping Now</h1>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Link className='m-2 ' to="/">Home</Link>
        <Link className='m-2 ' to="/products">Products</Link>
       <Link className='m-2 ' to="/cart">Cart</Link>
      </Nav>
      <Nav className='ms-auto'>
<CartIcon/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    
}

export default Header;