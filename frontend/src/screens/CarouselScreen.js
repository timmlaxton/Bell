import React, {useState, useEffect} from 'react';
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../components/Product';



export default function CarouselScreen() {
  var settings = {
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 8000
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
    <section className="section">
    <div className="columns">
        <div className="column is-10 is-offset-1">

       
    <Slider className="slider" {...settings} >
      
       {products.map((product) => (
            <Product product={product} key={product} />
          
            ))}
          
    </Slider>
          
    </div>
    </div>
    </section>
  
  )
}







