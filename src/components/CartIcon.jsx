import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const CartIcon = (props) => {
  return (
    <div className='postion'>
    <Link to='/cart'>
        <i className='fa fa-shopping-cart'></i>
      <span className='badge badge-danger'>{props.totalQuantity}</span></Link>
      {/* {console.log(typeof props.totalQuantity)} */}
    </div>
  )
}
const mapStateToProps =(state)=>{
    return {
        totalQuantity : state.cart.reduce((total,item)=>total+item.quantity,0)
    }
}


export default connect(mapStateToProps)(CartIcon) 
