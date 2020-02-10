import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay showStatus showThumbs axis="horizontal"  
  // height="400px" dynamicHeight="true" dynamicWidth="true"
  >
    <div 
    style={{
      background: "red",
      width: 100,
      height: 100,
      border: "30px solid white",
      textAlign: "center",
      lineHeight: "240px",
      boxSizing: "border-box"
    }}
    // key={index}
    >
      <button> demo </button>
      <img 
      max-width="100%"
      max-height="100%"
      src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
      <br/>
      <p className="legend">Legend 55</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
  </Carousel>
);
