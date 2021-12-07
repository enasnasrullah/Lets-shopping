import React, { useEffect,useState } from 'react'
import productApi from '../Apis/Product.js';
import ProductItem from '../components/ProductItem';
const Products = () => {
const [products, setProducts] = useState([])

 useEffect(() => {
 productApi.getAll().then(data=>{setProducts(data)})
 
 }, [])
 console.log(products)
  return (
    <div className='container'>
   <h1 className='text-center'>Products</h1>
   <div className='row'>
{products.map(product=>{
return <div className='col-xl-3 col-md-6 col-s-12 ' key={product.id}>
<ProductItem product={product}/>
</div>
})}


   </div>
    </div>
  )
}

export default Products
