import React  from 'react'
import {  clearCart } from '../actions/actions.js';
import CartItem from '../components/CartItem.jsx';
import {connect} from 'react-redux'

const Cart = (props) => {

  const placeOrder =()=>{
    props.clearCart()
    alert('are you sure ')
  }
  return (
    <div className='container'>
   <h1 className='text-center'>cart</h1>
   <div className='row'>
{props.cartItems.map((item,index)=>{
return <div className='col-md-4' key={item.product.id}>
<CartItem item={item} index={index}/>
</div>
})}

<h4>Total {props.total}</h4>
<button className='btn btn-primary btn-block' onClick={placeOrder}>  PlaceOrder</button>

   </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
return{
  cartItems : state.cart,
  total :state.cart.reduce((total,item)=>total+ item.quantity * item.product.price,0)
}
}
const mapDispatchTpProps=(dispatch)=>{
  return{
clearCart :()=>dispatch(clearCart())
  }

}



export default connect (mapStateToProps,mapDispatchTpProps)(Cart)
