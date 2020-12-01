import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <img src="../images/w6.jpg"  className="carouselone" />,
  <img src="../images/w3.jpg"  className="carouseltwo" />,
  <img src="../images/w4.jpg"  className="carouselthree" />,
];

const CarouselScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const onSlideChanged = ({ item }) => setActiveIndex(item);

    return [
        <AliceCarousel className="carousel"
            mouseTracking
            disableDotsControls
            disableButtonsControls
            infinite
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
        />,
          <div> 
       
        </div>,

        <div >
            <button className="prev-button" onClick={slidePrev}>Prev </button>
            <button className="next-button" onClick={slideNext}>Next</button>
        </div>,
    ];
};

export default CarouselScreen
