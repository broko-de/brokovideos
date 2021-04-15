import React from 'react'
import '../assets/styles/components/Carousel.scss';

// El children seríe el componente Item del carousel
const Carousel = ({children}) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
);

export default Carousel;