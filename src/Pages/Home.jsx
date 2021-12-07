import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return   <>
      <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100  carousel-img"
      src="https://dfcdn.defacto.com.tr/df/1920/Mobile/en_slider-3_8a03085c-6616-4229-918f-4e179421d5b4_57292b87-60b0-44d7-89e9-1bcc9506c6a1_DI_198.jpg"
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img "
      src="https://dfcdn.defacto.com.tr/df/1920/Mobile/en_slider-2_6b0dd294-12d8-4c45-bed2-268cd2bb2163_58754551-21ab-4c78-b56a-4ca7318ec720_DI_198.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100   carousel-img"
      src="https://dfcdn.defacto.com.tr/df/1920/Mobile/en_slider-1_977be84c-a8af-4d68-b89d-37d89079b242_6e6c6666-9c62-4226-968f-1a839b46fe91_DI_198.jpg"
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
<div className='about'>
  <div className='container'>
    <h2 className='text-center'>LETS SHOPPING</h2>
    <p></p>
<div className='m-auto p-5 text-center'>
  <button className='btn btn-outline-dark btn-dark  p-3'>
    
           <Link className='text-white ' to="/products">

    Shop Now</Link></button>

</div>
   
  </div>
</div>
<footer className='text-center p-3 m-2'>
BY ENAS NASRULLAH
</footer>

    </>
  
}

export default Home
