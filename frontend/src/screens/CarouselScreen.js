import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <img src="../images/w2.jpg"  className="yours-custom-class" />,
  <img src="../images/w3.jpg"  className="yours-custom-class" />,
  <img src="../images/w4.jpg"  className="yours-custom-class" />,
];

const CarouselScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const onSlideChanged = ({ item }) => setActiveIndex(item);

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            infinite
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
        />,
        <div >
            <button className="prev-button" onClick={slidePrev}>Prev</button>
            <button className="next-button" onClick={slideNext}>Next</button>
        </div>,
    ];
};

export default CarouselScreen
