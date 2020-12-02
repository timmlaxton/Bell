import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../components/Product';
import products from '../products'


export default function CarouselScreen() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: false
  };

  

  return (
    <Slider className="slider" {...settings} >
      
       {products.map((product) => (
            <Product product={product} />
          
            ))}
           
    </Slider>

  )
}







