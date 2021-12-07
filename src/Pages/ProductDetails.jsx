import React,{useEffect,useState} from 'react'
import {getById} from '../Apis/Product'
import { addToCart } from '../actions/actions'
import { connect } from 'react-redux'

const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity]= useState(0)

    const handlequantity =(e)=>
    {
        if (e.target.value<0)
        {
           return;
        }
setQuantity(e.target.value)
    }
    useEffect(() => {
      const id = props.match.params.id;
   getById(parseInt(id)).then(product=>{
       setLoading(false)
       setProduct(product)
})
    }, [])
console.log(product)
    if (loading )
    {
        return <h1 className='vh-100 d-flex justify-content-center align-items-center'>Loading</h1>
    }
    const AddToCart =(product)=>{
        props.addToCart(product,+quantity)
    }
  return (
    <div>
     <div className='row container'>
         <div className='col-md-6'>
             <img src={product.image} alt={product.name} />
         </div>
         <div className='col-md-6'>
             <h3>{product.name}</h3>
             <h3>{product.price} $</h3>
             <p>{product.description}</p>
             <input type={'number'} className='form-control my-2' value={quantity} onChange={handlequantity}/>
            <p>Total : {quantity* product.price}</p>
             <button onClick={()=>{AddToCart(product)}} className='btn btn-secondary'>Add to cart</button>

         </div>
     </div>
    </div>
  )
}
const mapDispatchTpProps=(dispatch)=>{
  return{
addToCart :(productInfo,quantity)=>dispatch(addToCart(productInfo,quantity))
  }

}

export default connect(null,mapDispatchTpProps) (ProductDetails)
