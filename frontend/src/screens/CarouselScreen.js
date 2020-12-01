import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../components/Product';
import products from '../products'


export default function CarouselScreen() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} >
      
       {products.map((product) => (
            <div> key={product.image}
            <Product product={product} />
           </div>
            ))}
           
    </Slider>

  )
}







