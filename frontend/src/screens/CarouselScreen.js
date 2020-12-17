import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Slider from "react-slick";
import Product from '../components/Product';
import SideNav from '../components/SideNav'
import Header from '../components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><div>Next</div>
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ><div>Previous</div>
    </div>
  );
}

export default function CarouselScreen() {
  var settings = {
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: true,
    autoplaySpeed: 8000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
    <>
    <Header/>
    <SideNav />
    <Slider className="slider" {...settings} >
       {products.map((product) => (
            <Product product={product} key={product} />
            ))}
    
    </Slider>
    </>
  )
}







