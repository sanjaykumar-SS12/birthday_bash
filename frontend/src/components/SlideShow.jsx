import React, { useState } from "react";
import SimpleImageSlider from 'react-simple-image-slider';
import "./SlideShow.css";




function SlideShow() {
   const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
     url:"https://images.pexels.com/photos/6800137/pexels-photo-6800137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
       url:"https://images.pexels.com/photos/5816094/pexels-photo-5816094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
       url:"https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        url:"https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg",
     },
   
 ];
    return ( 
        
        <div>
            <SimpleImageSlider
            width={1500}
            height={900}
            images={sliderImages}
            showBullets={true}
            // showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {1.5}
         />
        </div>
     );
}

export default SlideShow;


