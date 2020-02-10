import React from 'react';

import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Carousel1 from '../Components/Carousel1';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        
            {/* <Carousel1 width="25" /> */}
            <Carousel/> 
            homepage 
        </div>
    );

}

export default HomePage;