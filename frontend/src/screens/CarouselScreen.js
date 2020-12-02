import React, {useState, useEffect} from 'react';
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../components/Product';



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

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <Slider className="slider" {...settings} >
      
       {products.map((product) => (
            <Product product={product} />
          
            ))}
           
    </Slider>

  )
}







